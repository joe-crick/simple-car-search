/**
 * Implement a small JavaScript app which allows to search for color, type and price in the provided JSON structure.
 * Please describe your solution and especially decision/assumptions you made.
 */

import * as cars from 'search-cars/models/cars';

/*
 * NOTE: The module bundler will encapsulate this module for me so that I don't have to use
 * anything fancy to keep from polluting the global namespace.
 */

const doc = document;

const carTypeOption = type => {
  const option = doc.createElement('option');
  option.value = type;
  option.textContent = type;
  return option;
};

const appendCarTypeOption = carTypeSelector => carTypeOption => carTypeSelector.appendChild(carTypeOption);

const initCarTypeDropdown = () => {
  const carTypeSelector = doc.querySelector('.car-types');
  const appendCarType = appendCarTypeOption(carTypeSelector);
  cars.availableCarTypes
    .map(carTypeOption)
    .forEach(appendCarType);
};

/**
 * @desc Initialize the page
 */
const initDocument = () => {
  initCarTypeDropdown();
};

initDocument();