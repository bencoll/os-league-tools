import React, { useMemo } from 'react';
import { matchSorter } from 'match-sorter';
import { useDispatch, useSelector } from 'react-redux';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';
import Table from './common/Table';
import LabeledIcon from './common/LabeledIcon';
import SkillRequirementList from './SkillRequirementList';
import { updateQuest } from '../store/unlocks/unlocks';
import quests, { questsById, QUEST_STATUS } from '../data/quests';
import images from '../assets/images';
import titleSort from '../util/titleSort';

export default function QuestTable() {
  const isMdOrSmallerViewport = useBreakpoint(MEDIA_QUERIES.MD, MODE.LESS_OR_EQ);

  const data = useMemo(() => quests, []);
  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        id: 'id',
        accessor: 'id',
      },
      {
        Header: 'Quest',
        id: 'label',
        accessor: 'label',
        width: 300,
        sortType: (a, b) => titleSort(a.values.label, b.values.label),
        Cell: QuestCell,
      },
      {
        Header: 'QP',
        id: 'points',
        accessor: 'points',
        width: 80,
        Cell: PointsCell,
      },
      {
        Header: isMdOrSmallerViewport ? 'Diff' : 'Difficulty',
        id: 'difficulty',
        accessor: 'difficulty',
        width: isMdOrSmallerViewport ? 75 : 175,
        sortType: (a, b) => a.values.difficulty.id - b.values.difficulty.id,
        Cell: IconCell,
      },
      {
        Header: isMdOrSmallerViewport ? 'Len' : 'Length',
        id: 'length',
        accessor: 'length',
        width: isMdOrSmallerViewport ? 75 : 175,
        sortType: (a, b) => a.values.length.id - b.values.length.id,
        Cell: IconCell,
      },
      {
        Header: 'Series',
        id: 'series',
        accessor: 'series',
        width: isMdOrSmallerViewport ? 75 : 250,
        sortType: (a, b) => {
          const labelA = a.values.series ? a.values.series.label : 'zzz';
          const labelB = b.values.series ? b.values.series.label : 'zzz';
          return labelA.localeCompare(labelB);
        },
        Cell: IconCell,
      },
    ],
    []
  );
  const defaultColumn = useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 1000,
    }),
    []
  );
  const initialState = { hiddenColumns: ['id'] };
  const questState = useSelector(state => state.unlocks.quests);
  const filterState = useSelector(state => state.filters.quests);

  return (
    <Table
      columns={columns}
      data={data}
      filters={[completedFilter, difficultyFilter, lengthFilter]}
      filterState={filterState}
      globalFilter={fuzzyTextFilter}
      defaultColumn={defaultColumn}
      initialState={initialState}
      customFilterProps={{ questState }}
      ExpandedRow={ExpandedRow}
      enableResizeColumns
    />
  );
}

function fuzzyTextFilter(rows, __, filterValue) {
  return matchSorter(rows, filterValue, {
    threshold: matchSorter.rankings.CONTAINS,
    keys: ['values.label', 'values.series.label'],
  });
}
fuzzyTextFilter.autoRemove = val => !val;

function QuestCell({ row, value }) {
  const questState = useSelector(state => state.unlocks.quests);
  const questStatus = questState[row.id] || QUEST_STATUS.NOT_STARTED;
  const dispatch = useDispatch();

  return (
    <div {...row.getToggleRowExpandedProps()}>
      <div className='flex flex-row items-center h-full gap-2'>
        <span className='icon-2xl text-accent'>{row.isExpanded ? 'arrow_drop_down' : 'arrow_right'}</span>
        <span
          className='icon-2xl text-accent cursor-pointer select-none'
          onClick={e => {
            dispatch(
              updateQuest({
                id: row.values.id,
                status: questStatus === QUEST_STATUS.FINISHED ? QUEST_STATUS.NOT_STARTED : QUEST_STATUS.FINISHED,
              })
            );
            e.stopPropagation();
          }}
        >
          {questStatus === QUEST_STATUS.FINISHED ? 'check_box' : 'check_box_outline_blank'}
        </span>
        <span className='inline align-middle'>{value}</span>
      </div>
    </div>
  );
}

function PointsCell({ value }) {
  return (
    <div className='flex items-center h-full justify-center'>
      {value ? (
        <LabeledIcon label={value} icon={images['task-quest.png']} />
      ) : (
        <span className='text-xs italic'>n/a</span>
      )}
    </div>
  );
}

function IconCell({ value }) {
  const isMdOrSmallerViewport = useBreakpoint(MEDIA_QUERIES.MD, MODE.LESS_OR_EQ);

  if (value) {
    return (
      <div className='flex items-center h-full justify-center'>
        <LabeledIcon label={isMdOrSmallerViewport ? '' : value.label} icon={value.icon} />
      </div>
    );
  }
  return null;
}

function completedFilter(record, filterState, { questState }) {
  if (filterState.status === 'all') {
    return true;
  }
  const status = questState[record.id] === QUEST_STATUS.FINISHED;
  return (filterState.status === 'cmpl') === !!status;
}

function difficultyFilter(record, filterState) {
  if (filterState.difficulty === null) {
    return true;
  }
  return filterState.difficulty.includes(record.difficulty.label);
}

function lengthFilter(record, filterState) {
  if (filterState.length === null) {
    return true;
  }
  return filterState.length.includes(record.length.label);
}

function ExpandedRow({ original }) {
  return (
    <div className='flex flex-row items-center h-full gap-2 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]'>
      {/* hack: invisible dummy icons to align the expanded text with the previous row */}
      <div className='flex flex-row invisible'>
        <span className='icon-2xl text-accent'>x</span>
        <span className='icon-2xl text-accent'>x</span>
      </div>
      <div className='w-full flex flex-col gap-0.5'>
        <span className='text-xs mr-1'>Skill requirements:</span>
        <SkillRequirementList value={original.skillReqs} className='ml-3' />
        <span className='text-xs mr-1 mt-1'>Quest requirements:</span>
        {original.prereqs.length ? (
          <ul className='list-disc text-xs mb-2 ml-3'>
            {original.prereqs.map(prereqId => (
              <li key={prereqId}>{questsById[prereqId].label}</li>
            ))}
          </ul>
        ) : (
          <span className='italic text-xs ml-3 mb-2'>none</span>
        )}
      </div>
    </div>
  );
}
