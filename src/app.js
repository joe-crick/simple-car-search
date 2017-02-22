/**
 * Implement a small JavaScript app which allows to search for color, type and price in the provided JSON structure.
 * Please describe your solution and especially decision/assumptions you made.
 */
import * as cars from 'search-cars/models/cars';
import {makeOption} from 'search-cars/lib/selects';
import {appendChild} from 'search-cars/lib/append-child';
import {makeListGroupItem} from 'search-cars/lib/lists';
import './app.less';

/*
 * NOTE: The module bundler will encapsulate this module for me so that I don't have to use
 * anything fancy to keep from polluting the global namespace.
 */

const doc = document;
const toOption = makeOption(doc);

/**
 * @desc Initializes a drop down (i.e., select element) with options.
 * @param node
 */
const initDropdown = node => dropdownOptions => {
  const appendOption = appendChild(node);
  dropdownOptions
    .map(toOption)
    .forEach(appendOption);
};

/**
 * @desc Initializes the car dropdown
 * @param carTypeSelector
 * @param carTypes
 */
const initCarTypeDropdown = (carTypeSelector, carTypes) => {
  initDropdown(carTypeSelector)(carTypes);
};

/**
 * @desc Initializes the color dropdown
 * @param carColorSelector
 * @param carColors
 */
const initCarColorDropdown = (carColorSelector, carColors) => {
  initDropdown(carColorSelector)(carColors);
};

/**
 * @desc Wires up the click event on the search button to the search
 * @param carColorSelector
 * @param carTypeSelector
 * @param priceFilter
 */
// TODO: This could be refactored to be nicer...
const wireUpSearch = function (carColorSelector, carTypeSelector, priceFilter) {
  const searchResultsContainer = doc.querySelector('.search-results');
  const searchButton = doc.querySelector('.search-cars');
  const toListItem = makeListGroupItem(doc);
  const appendListItem = appendChild(searchResultsContainer);
  const carSearch = cars.searchCars(carColorSelector)(carTypeSelector)(priceFilter);

  searchButton.addEventListener('click', event => {
    event.preventDefault();
    searchResultsContainer.innerHTML = '';
    carSearch(cars.getStock())
      .map(toListItem)
      .forEach(appendListItem)
  });
};

/**
 * @desc Initializes the state of the price filter
 * @param priceFilter
 */
const initPriceFilter = priceFilter => {
  priceFilter.min = cars.carPriceRange.min;
  priceFilter.max = cars.carPriceRange.max;
};

/**
 * @desc Initialize the app
 */
const initApp = () => {
  const carTypeSelector = doc.querySelector('.car-types');
  const carColorSelector = doc.querySelector('.car-colors');
  const priceFilter = doc.querySelector('.car-price');

  initCarTypeDropdown(carTypeSelector, cars.availableCarTypes);
  initCarColorDropdown(carColorSelector, cars.availableCarColors.sort());
  initPriceFilter(priceFilter);

  wireUpSearch(carColorSelector, carTypeSelector, priceFilter);
};

initApp();