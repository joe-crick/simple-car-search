// import carStock from './fixtures/car-data.json!';
import {search, getUniqueSetByProperty} from 'search-cars/lib/filter-data';

export const carStock = {
  "items": [
    {
      "color": "red",
      "type": "Porsche 911",
      "yearOfConstruction": 2000,
      "price": 60000
    },
    {
      "color": "black",
      "type": "Porsche Panamera",
      "yearOfConstruction": 2010,
      "price": 120000
    },
    {
      "color": "green",
      "type": "VW Beetle",
      "yearOfConstruction": 1960,
      "price": 8000,
      "notes": "damaged at the front bumper"
    },
    {
      "color": "blue",
      "type": "Audi A5",
      "yearOfConstruction": 1998,
      "price": 28345
    },
    {
      "color": "yellow",
      "type": "Ferrari 430 Spider",
      "yearOfConstruction": 1990,
      "price": 80435
    },
    {
      "color": "gray",
      "type": "Audi Commodore",
      "yearOfConstruction": 1992,
      "price": 8212
    }
  ]
}


/**
 * @desc Creates a Type that contains a searchable set of cars
 */
const getCarPropertySet = getUniqueSetByProperty(carStock.items);

/**
 * @desc Search cars by color
 * @param color
 */
export const searchCarsByColor = color => car => color ? car.color === color : true;

/**
 * @desc Search cars by Type
 * @param type
 */
export const searchCarsByType = type => car => type ? car.type === type : true;

/**
 * @desc Search cars by Price
 * @param price
 */
export const searchCarsByPrice = price => car => price ? car.price === price : true;

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