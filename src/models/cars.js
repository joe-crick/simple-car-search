import carStock from './fixtures/car-data.json';
import {search, getUniqueSetByProperty} from 'search-cars/lib/filter-data';

export function getStock(){
  return carStock.carStock;
}

/**
 * @desc Creates a Type that contains a searchable set of cars
 */
const getCarPropertySet = getUniqueSetByProperty(carStock.carStock);

/**
 * @desc Search cars by color
 * @param color
 */
const searchCarsByColor = color => car => color ? car.color === color : true;

/**
 * @desc Search cars by Type
 * @param type
 */
const searchCarsByType = type => car => type ? car.type === type : true;

/**
 * @desc Search cars by Price
 * @param price
 */
const searchCarsByPrice = price => car => price ? car.price <= price : true;

/**
 * @desc Returns the available car colors
 * @note I would normally make the following props observable
 */
export const availableCarColors = getCarPropertySet('color');

/**
 * @desc Available car types
 */
export const availableCarTypes = getCarPropertySet('type');

const _allCarPrices = getCarPropertySet('price').sort();

/**
 * @desc The range of available car prices
 * @note I'll use this for basic user feedback. If the price the user enters is outside the range, they'll be notified.
 * @type {{min: T, max: T}}
 */
export const carPriceRange = {
    min: _allCarPrices.pop(),
    max: _allCarPrices.shift()
  };

/**
 * @desc Filters car stock data
 * @param color
 */
export const searchCars = color => type => price => carStock => {
  const colorFilter = searchCarsByColor(color.options[color.selectedIndex].value);
  const typeFilter = searchCarsByType(type.options[type.selectedIndex].value);
  const priceFilter = searchCarsByPrice(price.value);
  return carStock
    .filter(colorFilter)
    .filter(typeFilter)
    .filter(priceFilter);
};