export function regionsFilter(record, filterState) {
  // eslint-disable-next-line no-console
  // console.dir(record);

  if (filterState.regions === null || record.areas == null) {
    return true;
  }
  if (record.areas.includes('All') && filterState.regions.length) {
    return true;
  }
  return record.areas.some(area => filterState.regions.includes(area));
}

export default [regionsFilter];
