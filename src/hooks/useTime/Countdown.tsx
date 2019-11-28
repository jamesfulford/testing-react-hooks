//
// Sample usage
//
import React from 'react';
import { DateTime } from 'luxon';
import { useTime } from '.';

interface ICountdownProps {
    end: DateTime,
}

export const Countdown: React.FC<ICountdownProps> = ({ end }: ICountdownProps) => {
    const now: DateTime = useTime(200); // this countdown will queue a re-render every 200ms.
    // (it will try to update every 200ms)

    // Handling the out-of-time case (countdown finished!)
    if (now > end) {
        return (
            <h1>It is finished!</h1>
        );
    }

    // Luxon `DateTime`: https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html#instance-method-diff
    const diff = end.diff(now);
    // Luxon `Duration`: https://moment.github.io/luxon/docs/class/src/duration.js~Duration.html#instance-method-toFormat
    const formattedDuration = diff.toFormat('hh:mm:ss');

    return (
        <h1>This app will self-destruct in {formattedDuration}</h1>
    );
}
