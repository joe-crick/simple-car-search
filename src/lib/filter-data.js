/**
 * @desc Creates a Type that will generically filter an array of data
 * @param data
 */
export const search = data => searchPredicate => data.filter(searchPredicate);

export const getUniqueSetByProperty = data => property =>
  data.reduce((previousItem, currentItem) => previousItem[currentItem[property]] = currentItem[property],
    {});

