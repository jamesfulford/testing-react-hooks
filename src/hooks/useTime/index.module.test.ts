import { renderHook, act } from '@testing-library/react-hooks'

// Before importing useTime hook
jest.mock('./getTime', () => ({
    getTime: jest.fn().mockReturnValue('mockNow')
}));

import { getTime } from './getTime'; // mocked function
import { useTime } from '.';

describe('', () => {
    it('should return the current time (mocked through module system)', () => {
        const { result } = renderHook(() => useTime(100));

        expect(result.current).toBe('mockNow');
        expect(getTime).toBeCalledTimes(1);
    });
});
