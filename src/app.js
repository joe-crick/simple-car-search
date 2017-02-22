/**
 * Implement a small JavaScript app which allows to search for color, type and price in the provided JSON structure.
 * Please describe your solution and especially decision/assumptions you made.
 */

import * as cars from 'search-cars/models/cars';
import {makeOption} from 'search-cars/lib/selects';
import {appendChild} from 'search-cars/lib/append-child';
import './app.less';

/*
 * NOTE: The module bundler will encapsulate this module for me so that I don't have to use
 * anything fancy to keep from polluting the global namespace.
 */

const doc = document;
const toOption = makeOption(doc);

const initDropdown = node => dropdownOptions => {
  const appendOption = appendChild(node);
  dropdownOptions
    .map(toOption)
    .forEach(appendOption);
};

const initCarTypeDropdown = (carTypeSelector, carTypes) => {
  initDropdown(carTypeSelector)(carTypes);
};

const initCarColorDropdown = (carColorSelector, carColors) => {
  initDropdown(carColorSelector)(carColors);
};

const carFilter = color => type => price => event => {
  event.preventDefault();
  const searchFilters = [color.value, type.value, price.value];
  return cars.carsByColor(color.value)
};

/**
 * @desc Initialize the page
 */
const initDocument = () => {
  const carTypeSelector = doc.querySelector('.car-types');
  const carColorSelector = doc.querySelector('.car-colors');
  const priceFilter = doc.querySelector('.car-price');

  initCarTypeDropdown(carTypeSelector, cars.availableCarTypes);
  initCarColorDropdown(carColorSelector, cars.availableCarColors.sort());
  priceFilter.min = cars.carPriceRange.min;
  priceFilter.max = cars.carPriceRange.max;

  const searchCars = carFilter(carColorSelector)(carTypeSelector)(priceFilter);
  doc.querySelector('.search-cars').addEventListener('click', searchCars);
};

initDocument();