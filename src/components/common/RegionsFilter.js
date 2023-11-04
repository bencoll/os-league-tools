import React from 'react';
import FilterButtons, { FilterSelectAll } from './FilterButtons';
import { TRAILBLAZER_REGIONS } from '../../data/regions';

export default function RegionsFilter({ regionsState, updateFilter }) {
  return (
    <>
      <h3 className='heading-accent-md'>Regions</h3>
      <div className='flex flex-col px-3 mb-2 text-sm w-full'>
        <FilterButtons
          filterName='regions'
          selectedValues={regionsState}
          updateFunc={updateFilter}
          values={Object.values(TRAILBLAZER_REGIONS)}
        />
        <FilterSelectAll
          filterName='regions'
          updateFunc={updateFilter}
          values={Object.values(TRAILBLAZER_REGIONS).map(({ label }) => label)}
        />
      </div>
    </>
  );
}
