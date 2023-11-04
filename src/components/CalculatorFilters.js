import React from 'react';
import { useSelector } from 'react-redux';
import { updateCommonFilter } from '../store/filters';
import RegionsFilter from './common/RegionsFilter';

export default function CalculatorFilters() {
  const commonFilterState = useSelector(state => state.filters.common);

  return (
    <div className='mb-1'>
      <RegionsFilter regionsState={commonFilterState.regions} updateFilter={updateCommonFilter} />
    </div>
  );
}
