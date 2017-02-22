/**
 * Implement a small JavaScript app which allows to search for color, type and price in the provided JSON structure.
 * Please describe your solution and especially decision/assumptions you made.
 */

import * as cars from 'search-cars/models/cars';
import * as select from 'search-cars/lib/selects';

/*
 * NOTE: The module bundler will encapsulate this module for me so that I don't have to use
 * anything fancy to keep from polluting the global namespace.
 */

const doc = document;
const makeOption = select.makeOption(doc);

const initDropdown = node => dropdownOptions => {
  const appendOption = select.appendOptions(node);
  dropdownOptions
    .map(makeOption)
    .forEach(appendOption);
};

const initCarTypeDropdown = (carTypeSelector, carTypes) => {
  initDropdown(carTypeSelector)(carTypes);
};

const initCarColorDropdown = (carColorSelector, carColors) => {
  initDropdown(carColorSelector)(carColors);
};

/**
 * @desc Initialize the page
 */
const initDocument = () => {
  initCarTypeDropdown(doc.querySelector('.car-types'), cars.availableCarTypes);
  initCarColorDropdown(doc.querySelector('.car-colors'), cars.availableCarColors.sort());
};

initDocument();