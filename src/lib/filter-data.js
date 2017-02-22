/**
 * @desc Creates a Type that will generically filter an array of data
 * @param data
 */
export const search = data => searchPredicate => data.filter(searchPredicate);

export const getUniqueSetByProperty = data => property =>
  Array.from(data.reduce((set, currentItem) => {
    set.add(currentItem[property]);
    return set;
  }, new Set()));

