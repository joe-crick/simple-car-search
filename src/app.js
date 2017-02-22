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

const carFilter = color => type => price => carStock => {
    const colorFilter = cars.searchCarsByColor(color.options[color.selectedIndex].value);
    const typeFilter = cars.searchCarsByType(type.options[type.selectedIndex].value);
    const priceFilter = cars.searchCarsByPrice(price.value);
    return carStock
      .filter(colorFilter)
      .filter(typeFilter)
      .filter(priceFilter);
  };

/**
 * @desc Initialize the page
 */
const initDocument = () => {
  const carTypeSelector = doc.querySelector('.car-types');
  const carColorSelector = doc.querySelector('.car-colors');
  const priceFilter = doc.querySelector('.car-price');
  const searchResults = doc.querySelector('.search-results');

  initCarTypeDropdown(carTypeSelector, cars.availableCarTypes);
  initCarColorDropdown(carColorSelector, cars.availableCarColors.sort());
  priceFilter.min = cars.carPriceRange.min;
  priceFilter.max = cars.carPriceRange.max;

  const searchCars = carFilter(carColorSelector)(carTypeSelector)(priceFilter);
  const toListItem = makeListGroupItem(doc);
  const appendListItem = appendChild(searchResults);
  const searchButton = doc.querySelector('.search-cars');
  searchButton.addEventListener('click', event => {
    event.preventDefault();
    searchResults.innerHTML = '';
    searchCars(cars.getStock())
      .map(toListItem)
      .forEach(appendListItem)
  });
};

initDocument();