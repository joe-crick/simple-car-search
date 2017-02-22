/**
 * @desc Creates a Type that will generically filter an array of data
 * @param data
 */
export const search = data => searchPredicate => data.filter(searchPredicate);

/**
 * @desc Creates a unique set of properties as an array from a collection of objects
 * @param data
 * @returns {Array}
 */
export const getUniqueSetByProperty = data => property =>
  Array.from(data.reduce((set, currentItem) => {
    set.add(currentItem[property]);
    return set;
  }, new Set()));

