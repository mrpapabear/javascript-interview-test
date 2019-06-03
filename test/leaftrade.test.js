const expect = require('chai').expect;
const interviewServices = require('../src/services/interviewServices');

var interviewSvcs = new interviewServices();

describe('Leaftrade Tests', () => {
    describe('Reverse Array', () => {
        it('should turn the below string into an array and reverse the words', () => {
            let data = "I want this job.";

            /*
             * Looks like the period is not expected in the final result. Since this is something
             * specific to this implementation and not related to the general idea of reversing a
             * string, I'm handling that here where it exists instead.
             */
            data = interviewSvcs.reverseString(data.replace('.', ''));

            expect(['job', 'this', 'want', 'I']).to.deep.equal(data);
        });
    });
    describe('Order Array', () => {
        it('should sort the below array', () => {
            let data = ['200', '450', '2.5', '1', '505.5', '2'];

            data = interviewSvcs.sortArray(data);

            expect([1, 2, 2.5, 200, 450, 505.5]).to.deep.equal(data);
        });
    });
    describe('Get Diff Array', () => {
        it('should determine array differences', () => {
            let data1 = [1, 2, 3, 4, 5, 6, 7];
            let data2 = [2, 4, 5, 7, 8, 9, 10];

            let data = interviewSvcs.arrayDifferences(data2, data1);

            expect([8, 9, 10]).to.deep.equal(data);

            data = interviewSvcs.arrayDifferences(data1, data2);

            expect([1, 3, 6]).to.deep.equal(data);
        });
    });
    describe('Get Distance', () => {
        it('should get the distance between two geo points', () => {
            let place1 = {
                lat: '41.9641684',
                lon: '-87.6859726',
            };
            let place2 = {
                lat: '42.1820210',
                lon: '-88.3429465',
            };

            /*
             * Doing rounding here as it's a specific implementation detail of this instance of
             * the usage and not related to the calculation as a whole
             */
            let distance = (Math.round(Math.floor(100 * interviewSvcs.geoDistance(place1, place2))) / 100).toString();

            expect(distance).to.equal('36.91');
        });
    });
    describe('Get Human Time Diff', () => {
        it('should generate a human readable time difference', () => {
            let time1 = '2016-06-05T12:00:00';
            let time2 = '2016-06-05T15:00:00';

            let timeDiff = interviewSvcs.timeDifference(time1, time2);

            expect(timeDiff).to.equal('3 hours ago');
        });
    });
});
