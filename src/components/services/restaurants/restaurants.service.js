import {mocks} from './mock';

export const restaurantRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    if (!mocks) {
      reject('not found');
    } else {
      resolve(mocks[location]);
    }
  });
};

restaurantRequest()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
