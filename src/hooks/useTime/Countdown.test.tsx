import React from 'react';
import renderer from 'react-test-renderer';

import { DateTime } from 'luxon';
import { useFakeTimers, SinonFakeTimers } from 'sinon';

import { Countdown } from './Countdown';

describe('Countdown', () => {

    // For time stability, control time
    let clock: SinonFakeTimers;
    beforeEach(() => { clock = useFakeTimers(); });
    afterEach(() => { clock.restore(); });

    it('should match snapshot', () => {
        const end = DateTime.local().plus({ seconds: 1.1 });
        const s = renderer.create(<Countdown end={end} />);

        expect(s.toJSON()).toMatchSnapshot();
    });

    // Even if I tested actual time functionality of Countdown,
    // I would be testing the particular usage of useTime in Countdown.
    // This makes actual testing of useTime particularly difficult
    // especially if there are unused return values or options.

    // (you could wire up the options to be passable by props,
    // as I have done for Countdown with the _useTimeOptions prop,
    // there still isn't a way to test the return values of useTime)

    // Trying to test the time object returned is difficult
    // primarily because the only way to access it in this component
    // is through the result of `.toFormat('hh:mm:ss')`, which doesn't
    // change by the millisecond.

    // Implementation shouldn't get in the way of testing a reusable hook.
});
