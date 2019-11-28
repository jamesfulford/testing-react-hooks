import { renderHook, act } from '@testing-library/react-hooks'

import { useFakeTimers, SinonFakeTimers } from 'sinon';
import { useTime } from '.';

describe('useTime', () => {
    let clock: SinonFakeTimers;

    beforeEach(() => { clock = useFakeTimers(); });
    afterEach(() => { clock.restore(); });

    it('should update the time based on refresh rate', () => {
        const { result } = renderHook(() => useTime(100));
        const initialTime = result.current;

        act(() => {
            clock.tick(99);
        });

        // Don't update yet
        expect(initialTime).toEqual(result.current);

        act(() => {
            clock.tick(1);
        });

        // Updated
        expect(initialTime).not.toEqual(result.current);

        expect(result.current.diff(initialTime).milliseconds).toBe(100);
    });

});
