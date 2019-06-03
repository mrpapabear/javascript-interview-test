module.exports = class InterviewServices {
    constructor() {
    }


    reverseString(stringToReverse) {
        return stringToReverse.split(' ').reverse();
    }


    sortArray(arrayToSort) {
        return arrayToSort.sort(function(a, b) {
            return a - b;  // ascending
            // return b - a;  // descending
        });
    }


    arrayDifferences(arr1, arr2) {
        return arr1.filter(val => !arr2.includes(val));
    }


    geoDistance(place1, place2) {
        // Pulling in the geodist library for doing these calculations without writing another function
        const geo = require('geodist');

        return geo(place1, place2, {exact: true});
    }


    timeDifference(earlierTime, laterTime) {
        // Pulling in the moment library as it has good time-based humanizations
        const moment = require('moment');

        return moment(earlierTime).from(moment(laterTime));
    }
}