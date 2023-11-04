/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../client/localstorage-client';
import { getCategoriesForStore } from '../data/categories';
import { STATS, DIFFICULTY, DIARY_LOCATIONS, DIARY_DIFFICULTY } from '../data/constants';
import { QUEST_DIFFICULTY, QUEST_LENGTH } from '../data/quests';
import { TRAILBLAZER_REGIONS } from '../data/regions';

const CURRENT_VERSION = 15;

const mapDataValues = values => Object.values(values).map(({ label }) => label);

const INITIAL_COMMON_STATE = {
  regions: mapDataValues(TRAILBLAZER_REGIONS),
};

const INITIAL_TASK_STATE = {
  status: 'all',
  todo: 'all',
  ignored: 'hide',
  difficulty: mapDataValues(DIFFICULTY),
  categories: getCategoriesForStore(),
  skills: Object.keys(STATS),
  reorderEnabled: false,
  showNoRequirements: true,
  showUnmetRequirements: true,
  showIncompletePrereqs: true,
  isUnchainedTalent: false,
};

const INITIAL_QUEST_STATE = {
  status: 'all',
  difficulty: mapDataValues(QUEST_DIFFICULTY),
  length: mapDataValues(QUEST_LENGTH),
  skills: null,
};

const INITIAL_DIARIES_STATE = {
  status: 'all',
  difficulty: mapDataValues(DIARY_DIFFICULTY),
  location: mapDataValues(DIARY_LOCATIONS),
  skills: null,
};

const INITIAL_CALCULATORS_STATE = {
  status: 'all',
};

const INITIAL_STATE = {
  version: CURRENT_VERSION,
  common: INITIAL_COMMON_STATE,
  tasks: INITIAL_TASK_STATE,
  quests: INITIAL_QUEST_STATE,
  diaries: INITIAL_DIARIES_STATE,
  calculators: INITIAL_CALCULATORS_STATE,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers: {
    updateCommonFilter: (state, action) => {
      state.common[action.payload.field] = action.payload.value;
    },
    updateTaskFilter: (state, action) => {
      state.tasks[action.payload.field] = action.payload.value;
    },
    updateQuestFilter: (state, action) => {
      state.quests[action.payload.field] = action.payload.value;
    },
    updateDiariesFilter: (state, action) => {
      state.diaries[action.payload.field] = action.payload.value;
    },
    updateCalculatorsFilter: (state, action) => {
      state.calculators[action.payload.field] = action.payload.value;
    },
    resetCommon: state => ({
      ...state,
      common: INITIAL_COMMON_STATE,
    }),
    resetTasks: state => ({
      ...state,
      tasks: INITIAL_TASK_STATE,
    }),
    resetQuests: state => ({
      ...state,
      quests: INITIAL_QUEST_STATE,
    }),
    resetDiaries: state => ({
      ...state,
      diaries: INITIAL_DIARIES_STATE,
    }),
    resetCalculators: state => ({
      ...state,
      calculators: INITIAL_CALCULATORS_STATE,
    }),
    reset: () => INITIAL_STATE,
  },
});

export const loadState = () => {
  const prevState = getFromLocalStorage(LOCALSTORAGE_KEYS.FILTER_STATE, INITIAL_STATE);
  if (prevState && prevState.version < CURRENT_VERSION) {
    // Clear data from old versions
    return INITIAL_STATE;
  }
  return prevState;
};

export const {
  updateCommonFilter,
  updateTaskFilter,
  updateQuestFilter,
  updateDiariesFilter,
  updateCalculatorsFilter,
  resetCommon,
  resetTasks,
  resetQuests,
  resetDiaries,
  resetCalculators,
  reset,
} = filterSlice.actions;

export default filterSlice.reducer;
