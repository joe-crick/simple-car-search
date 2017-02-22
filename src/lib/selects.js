/**
 * @desc Creates an option Dom Element
 * @param doc
 * @returns {Node}
 */
export const makeOption = doc => type => {
  const option = doc.createElement('option');
  option.value = type;
  option.textContent = type;
  return option;
};