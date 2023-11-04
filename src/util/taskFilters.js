import { difference } from 'lodash';
import { STATS } from '../data/constants';
import tasks from '../data/tasks';
import { regionsFilter } from './commonFilters';

function difficultyFilter(record, filterState) {
  if (filterState.difficulty === null) {
    return true;
  }
  return filterState.difficulty.includes(record.difficulty.label);
}

function categoryFilter(record, filterState) {
  if (filterState.categories === null) {
    return true;
  }
  const recordCategory = `${record.category.label}-${record.subcategory.label}`;

  return filterState.categories.includes(recordCategory);
}

function skillFilter(record, filterState, { hiscoresState }) {
  const taskSkills = record.skillReqs.map(req => req.skill);

  // Check if required skills are included in filter
  const includeNoReq = filterState.showNoRequirements;
  const hasValidSkills = difference(taskSkills, filterState.skills).length === 0;
  if (!hasValidSkills || (!includeNoReq && taskSkills.length === 0)) {
    return false;
  }

  // Check if level requirements should be ignored
  if (!hiscoresState || hiscoresState.loading || hiscoresState.error || filterState.showUnmetRequirements) {
    return true;
  }

  // Check if level requirements are met
  let meetsRequirements = true;
  record.skillReqs.forEach(skillReq => {
    const hiscores = hiscoresState.skills[skillReq.skill.toLowerCase()];
    const levelBoost = filterState.isUnchainedTalent && STATS[skillReq.skill]?.unchainedTalentEligible ? 8 : 0;
    const level = (hiscores?.level || 1) + levelBoost;
    meetsRequirements = meetsRequirements && level >= skillReq.level;
  });
  return meetsRequirements;
}

function prereqFilter(record, filterState, { tasksState }) {
  if (filterState.showIncompletePrereqs || !record.prerequisite) {
    return true;
  }

  const prereq = tasks[record.prerequisite];
  return !!tasksState[prereq.id]?.completed;
}

function completedFilter(record, filterState, { tasksState }) {
  if (filterState.status === 'all') {
    return true;
  }
  const status = !!tasksState[record.id]?.completed;
  return (filterState.status === 'cmpl') === !!status;
}

function todoFilter(record, filterState, { tasksState }) {
  if (filterState.todo === 'all') {
    return true;
  }
  const todo = !!tasksState[record.id]?.todo;
  return (filterState.todo === 'only') === !!todo;
}

function ignoredFilter(record, filterState, { tasksState }) {
  if (filterState.ignored === 'all') {
    return true;
  }
  const ignored = !!tasksState[record.id]?.ignored;
  return (filterState.ignored === 'only') === !!ignored;
}

export default {
  difficultyFilter,
  categoryFilter,
  skillFilter,
  completedFilter,
  todoFilter,
  ignoredFilter,
  prereqFilter,
  regionsFilter,
};
