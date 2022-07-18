import {mocks} from './mock';
import camelize from 'camelize';
import {mockImages} from './mock';

export const restaurantRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    if (!mocks) {
      reject('not found');
    } else {
      resolve(mocks[location]);
    }
  });
};

export const restaurantTransform = ({results = []}) => {
  const mappedResults = results.map(restaurant => {
    restaurant.photos = restaurant.photos.map(p => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isCloseTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });
  return camelize(mappedResults);
};
