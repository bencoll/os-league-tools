import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { resetState } from '../store/common';
import {
  INITIAL_STATE as INITIAL_SETTINGS_STATE,
  load as loadSettingsState,
  loadState as loadSettingsLocalState,
} from '../store/settings';
import { load as loadTasksState, loadState as loadTasksLocalState } from '../store/tasks/tasks';
import { load as loadUnlocksState, loadState as loadUnlocksLocalState } from '../store/unlocks/unlocks';
import { load as loadCharacterState, loadState as loadCharacterLocalState } from '../store/user/character';
import {
  INITIAL_STATE as INITIAL_FRAGMENTS_STATE,
  load as loadFragmentState,
  loadState as loadFragmentsLocalState,
} from '../store/fragments/fragments';
import { updateAccountCache } from '../store/user/account';
import { createUserIfNeeded, getUser } from '../client/user-data-client';
import { INITIAL_STATE as INITIAL_TASKS_STATE } from '../store/tasks/constants';
import { INITIAL_STATE as INITIAL_UNLOCKS_STATE } from '../store/unlocks/constants';
import { INITIAL_STATE as INITIAL_CHARACTER_STATE } from '../store/user/constants';
import updateTasksVersion from '../store/tasks/updateTasksVersion';
import updateCharacterVersion from '../store/user/updateCharacterVersion';
import updateUnlocksVersion from '../store/unlocks/updateUnlocksVersion';
import updateFragmentsVersion from '../store/fragments/updateFragmentsVersion';

export default function useAccount({ redirectReturnToUrl }) {
  const {
    isLoading,
    isAuthenticated,
    user,
    loginWithRedirect,
    logout: logoutWithRedirect,
    getAccessTokenSilently,
  } = useAuth0();
  const isLoginCache = useSelector(state => state.account.accountCache.isLoggedIn);
  const accessToken = useSelector(state => state.account.accountCache.accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then(token => {
        dispatch(updateAccountCache({ isAuthenticated, user, accessToken: token }));
      });
    } else {
      updateAccountCache({ isAuthenticated, user, accessToken: undefined });
    }
  }, [isAuthenticated]);

  const isLoggedIn = isLoginCache || isAuthenticated;
  useEffect(() => {
    if (isLoginCache && accessToken) {
      getUser(user.email, accessToken).then(res => {
        if (res.success) {
          // user exists already, load their data and overwrite existing
          batch(() => {
            const taskState = updateTasksVersion(
              res.value.tasks?.S ? JSON.parse(res.value.tasks?.S) : INITIAL_TASKS_STATE
            );
            const settingsState = res.value.settings?.S ? JSON.parse(res.value.settings?.S) : INITIAL_SETTINGS_STATE;
            const characterState = updateCharacterVersion(
              res.value.character?.S ? JSON.parse(res.value.character?.S) : INITIAL_CHARACTER_STATE
            );
            const unlocksState = updateUnlocksVersion(
              res.value.unlocks?.S ? JSON.parse(res.value.unlocks?.S) : INITIAL_UNLOCKS_STATE
            );
            const fragmentState = updateFragmentsVersion(
              res.value.fragments?.S ? JSON.parse(res.value.fragments?.S) : INITIAL_FRAGMENTS_STATE
            );
            dispatch(loadTasksState({ forceOverwrite: true, newState: taskState, skipDbUpdate: true }));
            dispatch(loadSettingsState({ forceOverwrite: true, newState: settingsState, skipDbUpdate: true }));
            dispatch(loadUnlocksState({ forceOverwrite: true, newState: unlocksState, skipDbUpdate: true }));
            dispatch(loadCharacterState({ forceOverwrite: true, newState: characterState, skipDbUpdate: true }));
            dispatch(loadFragmentState({ forceOverwrite: true, newState: fragmentState, skipDbUpdate: true }));
          });
        } else {
          // user does not exist, create them and reload the current local state to save it to the DB
          createUserIfNeeded(user.email, accessToken).then(result => {
            if (result.success) {
              batch(() => {
                dispatch(loadTasksState({ forceOverwrite: true, newState: loadTasksLocalState() }));
                dispatch(loadSettingsState({ forceOverwrite: true, newState: loadSettingsLocalState() }));
                dispatch(loadUnlocksState({ forceOverwrite: true, newState: loadUnlocksLocalState() }));
                dispatch(loadCharacterState({ forceOverwrite: true, newState: loadCharacterLocalState() }));
                dispatch(loadFragmentState({ forceOverwrite: true, newState: loadFragmentsLocalState() }));
              });
            }
          });
        }
      });
    }
  }, [isLoginCache, accessToken]);

  const isAuthenticating = isLoading;

  const login = () => {
    loginWithRedirect({ redirect_uri: redirectReturnToUrl });
  };
  const logout = () => {
    logoutWithRedirect({ returnTo: redirectReturnToUrl });
    resetState(dispatch, true);
  };

  return { isLoggedIn, isAuthenticating, login, logout };
}
