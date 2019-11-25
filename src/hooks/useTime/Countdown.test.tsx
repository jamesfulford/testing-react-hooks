import React from 'react';
import renderer from 'react-test-renderer';

import { Countdown } from './Countdown';
import { DateTime } from 'luxon';

describe('Countdown', () => {
    it('should match snapshot', () => {
        const end = DateTime.local().plus({ seconds: 1.1 });
        const s = renderer.create(<Countdown end={end} />);

        expect(s.toJSON()).toMatchSnapshot();
    });

    // TODO(james.fulford): test component time functionality
});
