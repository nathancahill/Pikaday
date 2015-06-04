var Pikaday = require('../'),
    expect = require('expect.js');

describe('Pikaday public method', function ()
{
    'use strict';

    describe('#toString()', function ()
    {
        it('should return empty string when date not set', function ()
        {
            var pikaday = new Pikaday();
            expect(pikaday.toString()).to.be.empty;
        });

        it('should return date string, formatted by moment, when date is set', function() {
            var date = new Date(2014, 3, 25),
            pikaday = new Pikaday({
                format: 'DD-MM-YY'
            });

            pikaday.setDate(date);
            expect(pikaday.toString()).to.eql('25-04-14');
        });
    });

    describe('When specifying minDate option in Constructor', function () {
        it('Should remove the time portion (flattening to midnight)', function () {
            var date = new Date(2015, 1, 17, 22, 10, 5),
                expected = new Date(2015, 1, 17, 0, 0, 0),
                pikaday = new Pikaday({ minDate: date });

            expect(pikaday._o.minDate).to.eql(expected);
        });
    });

    describe('#setMinDate()', function () {
        it('should flatten date to midnight ignoring time portion (consistent with minDate option in ctor)', function () {
            var date = new Date(2015, 1, 17, 22, 10, 5),
                expected = new Date(2015, 1, 17, 0, 0, 0),
                pikaday = new Pikaday();

            pikaday.setMinDate(date);
            expect(pikaday._o.minDate).to.eql(expected);
        });
        it('should set minYear when setting minDate)', function () {
            var date = new Date(2015, 1, 17, 22, 10, 5),
                expected = 2015,
                pikaday = new Pikaday();

            pikaday.setMinDate(date);
            expect(pikaday._o.minYear).to.eql(expected);
        });
        it('should set minMonth when setting minDate)', function () {
            var date = new Date(2015, 1, 17, 22, 10, 5),
                expected = 1,
                pikaday = new Pikaday();

            pikaday.setMinDate(date);
            expect(pikaday._o.minMonth).to.eql(expected);
        });
    });

    describe('#setMaxDate()', function () {
        it('should flatten date to midnight ignoring time portion (consistent with maxDate option in ctor)', function () {
            var date = new Date(2015, 1, 17, 22, 10, 5),
                expected = new Date(2015, 1, 17, 0, 0, 0),
                pikaday = new Pikaday();

            pikaday.setMaxDate(date);
            expect(pikaday._o.maxDate).to.eql(expected);
        });
        it('should set maxYear when setting maxDate)', function () {
            var date = new Date(2015, 1, 17, 22, 10, 5),
                expected = 2015,
                pikaday = new Pikaday();

            pikaday.setMaxDate(date);
            expect(pikaday._o.maxYear).to.eql(expected);
        });
        it('should set maxMonth when setting maxDate)', function () {
            var date = new Date(2015, 1, 17, 22, 10, 5),
                expected = 1,
                pikaday = new Pikaday();

            pikaday.setMaxDate(date);
            expect(pikaday._o.maxMonth).to.eql(expected);
        });
    });
});
