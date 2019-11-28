import { useFakeTimers, SinonFakeTimers } from 'sinon';

import { useTimeout } from '.';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useTimeout', () => {
    let clock: SinonFakeTimers;

    beforeEach(() => { clock = useFakeTimers(); });
    afterEach(() => { clock.restore(); });

    it('should call the callback after time', () => {
        const fn = jest.fn(); // persists?
        renderHook(() => useTimeout(fn, 100));

        expect(fn).not.toHaveBeenCalled();
        act(() => {
            clock.tick(99);
        });
        expect(fn).not.toHaveBeenCalled();

        act(() => {
            clock.tick(1);
        });
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should call the callback once', () => {
        const fn = jest.fn(); // persists?
        renderHook(() => useTimeout(fn, 100));

        act(() => {
            clock.tick(100);
        });
        expect(fn).toHaveBeenCalledTimes(1);

        act(() => {
            clock.tick(100);
        });
        // still called once
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should cancel', () => {
        const fn = jest.fn();
        const { result } = renderHook(() => useTimeout(fn, 100));

        act(() => {
            result.current();
        });

        act(() => {
            clock.tick(100);
        });

        expect(fn).not.toHaveBeenCalled();
    });

    it('should cancel if callback changes', () => {
        let fn = jest.fn().mockName('fn1');
        const { rerender } = renderHook(() => useTimeout(fn, 100));

        act(() => {
            clock.tick(99);
        });

        // Change the callback
        act(() => {
            fn = jest.fn().mockName('fn2');
            rerender();
        });

        act(() => {
            clock.tick(1);
        });

        expect(fn).not.toHaveBeenCalled();

        act(() => {
            clock.tick(100);
        });

        expect(fn).toHaveBeenCalledTimes(1);
    });
});
