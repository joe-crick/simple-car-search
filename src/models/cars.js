import carStock from 'search-cars/models/fixtures/car-data';
import {search, getUniqueSetByProperty} from 'search-cars/lib/filter-data';

/**
 * @desc Creates a Type that contains a searchable set of cars
 */
const searchCarStock = search(carStock);
const getCarProperty = getUniqueSetByProperty(carStock);

/**
 * @desc Search cars by color
 * @param color
 */
export const searchCarsByColor = color => searchCarStock(car => car.color === color);

/**
 * @desc Search cars by Type
 * @param type
 */
export const searchCarsByType = type => searchCarStock(car => car.type === type);

/**
 * @desc Search cars by Price
 * @param price
 */
export const searchCarsByPrice = price => searchCarStock(car => car.price === price);

/**
 * @desc Returns the available car colors
 * @note I would normally make the following props observable
 */
export const availableCarColors = getCarProperty('color');

/**
 * @desc Available car types
 */
export const availableCarTypes = getCarProperty('type');

const _allCarPrices = getCarProperty('price').sort();

/**
 * @desc The range of available car prices
 * @note I'll use this for basic user feedback. If the price the user enters is outside the range, they'll be notified.
 * @type {{min: T, max: T}}
 */
export const carPriceRange = {
    min: _allCarPrices.shift(),
    max: _allCarPrices.pop()
  };