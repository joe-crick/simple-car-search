export const makeListGroupItem = doc => itemText => {
  const li = doc.createElement('li');
  li.textContent = itemText;
  li.className = 'list-group-item list-group-item-action';
  return li;
};