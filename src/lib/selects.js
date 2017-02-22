export const makeOption = doc => type => {
  const option = doc.createElement('option');
  option.value = type;
  option.textContent = type;
  return option;
};

export const appendOptions = selector => option => selector.appendChild(option);