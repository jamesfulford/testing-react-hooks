import { renderHook } from '@testing-library/react-hooks'
import { useTime } from '.';

describe('useTime (pure)', () => {
    it('should return the current time (mocked through parameters)', () => {
        const now = 'mockNow';
        const _getTime = jest.fn().mockReturnValue(now);
        const { result } = renderHook(() => useTime(100, { _getTime }));

        expect(result.current).toBe(now);
        expect(_getTime).toBeCalledTimes(1);
    });
});
