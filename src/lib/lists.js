/**
 * @desc Creates a ListGroup Item (styled for Bootstrap)
 * @param doc
 * @returns {Node}
 */
export const makeListGroupItem = doc => itemText => {
  const li = doc.createElement('li');
  li.innerHTML = `<a href="#">${itemText.type}</a>`;
  li.className = 'list-group-item list-group-item-action';
  return li;
};