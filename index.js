// 1. Return first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array of functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Function that returns a fare multiplier function
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// 5. Double fare
const fareDoubler = createFareMultiplier(2);

// 6. Triple fare
const fareTripler = createFareMultiplier(3);

// 7. Function that takes array and one of the driver selectors
const selectDifferentDrivers = function(drivers, driverSelector) {
  return driverSelector(drivers);
};
