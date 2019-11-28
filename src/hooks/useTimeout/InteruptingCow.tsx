import React, { useState, useCallback } from 'react';
import { useTimeout } from '.';

// In console, you should see 'B' trigger first, then 'A', even though 'A's timeout is shorter.
// This is because 'A' was cancelled after 3 seconds during the re-render. It was then re-scheduled to be 6 seconds after *this* re-render, not the initial render.
// 'B' was not cancelled, because of how callbacks are persisted set.

export const InterruptingCow = () => {
    // 6 seconds
    // (resets on next render because callback is different)
    const a = () => {
        console.log('Hey, A triggered!');
    };
    useTimeout(a, 6 * 1000);

    // 7 seconds
    // (will not reset on re-render, because useCallback will persist the same callback)
    const b = useCallback(() => {
        console.log('Hey, B triggered!');
    }, []);
    useTimeout(b, 7 * 1000);

    // 4 seconds, persistRenders
    // This will never be called, because it will be cancelled after 3 seconds.
    // It will not be re-scheduled, because it will persistRenders
    const endOfTheWorld = useCallback(() => {
        alert('It\'s the end of the world!');
    }, []);
    const saveWorld = useTimeout(endOfTheWorld, 4 * 1000);

    // Trigger a re-render after 3 seconds
    const [moo, setMoo] = useState(false);
    const mooTimeout = useCallback(() => {
        setMoo(true);
        saveWorld(); // good news, the end of the world is officially cancelled.
    }, [setMoo, saveWorld]);
    useTimeout(mooTimeout, 3 * 1000);

    return (
        <p>
            {
                moo
                    ? 'Re-rendered! Moo!'
                    : 'First render... check console and read the comments...'
            }
        </p>
    );
}
