import React from 'react';
import { useDispatch } from 'react-redux';
import { without } from 'lodash';

export default function FilterButtons({
  cols = 2,
  filterName = '',
  selectedValues = [],
  updateFunc = () => null,
  values = [],
  orientation = 'row',
} = {}) {
  const dispatch = useDispatch();

  const toggleValue = value => {
    const isSelected = selectedValues.includes(value);

    if (isSelected) {
      dispatch(
        updateFunc({
          field: filterName,
          value: without(selectedValues, value),
        })
      );
    } else {
      dispatch(updateFunc({ field: filterName, value: [...selectedValues, value] }));
    }
  };

  const gridValues = values.length % cols ? [...values, null] : values;

  return (
    <div className={`grid grid-cols-${cols} gap-px bg-subdued w-full`}>
      {gridValues.map((value, i) =>
        value ? (
          <button
            className={`p-1 bg-hover cursor-pointer ${
              selectedValues?.includes(value.label) ? 'bg-secondary text-accent' : 'bg-primary'
            }`}
            key={value.label}
            onClick={() => toggleValue(value.label)}
            type='button'
          >
            {value.icon && <img src={value.icon} alt={value.label} className='inline mx-1 max-h-6' />}
            {orientation === 'row' ? value.label : <p>{value.label}</p>}
          </button>
        ) : (
          <div className='bg-primary' key={i} />
        )
      )}
    </div>
  );
}

export function FilterSelectAll({ filterName = '', updateFunc = () => null, values = [] }) {
  const dispatch = useDispatch();

  return (
    <p className='italic text-center w-full'>
      <span className='mr-1'>Quick select:</span>
      <button
        className='inline italic hover:underline mx-1'
        type='button'
        onClick={() =>
          dispatch(
            updateFunc({
              field: filterName,
              value: values,
            })
          )
        }
      >
        all
      </button>
      |
      <button
        className='inline italic hover:underline mx-1'
        type='button'
        onClick={() => dispatch(updateFunc({ field: filterName, value: [] }))}
      >
        none
      </button>
    </p>
  );
}
