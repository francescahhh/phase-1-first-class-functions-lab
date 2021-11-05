const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']; 

const returnFirstTwoDrivers = function() {
    return drivers.slice(0, 2);
}

console.log(returnFirstTwoDrivers())

const returnLastTwoDrivers = function() {
    return drivers.slice(2);
}

console.log(returnLastTwoDrivers())

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(fare) {
        return int * fare };
    }

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverReturn) {
    if (driverReturn === returnFirstTwoDrivers) {
        return(returnFirstTwoDrivers(drivers));
    } else return(returnLastTwoDrivers(drivers));
}