//
// getTime helper function
// (helpful for testing)
// (and for showing that this hook isn't specific to any datetime library)
//
import { DateTime } from 'luxon';


export const getTime = (): DateTime => {
    // This implementation uses Luxon: https://moment.github.io/luxon/
    return DateTime.local();

    // You can also use moment: https://momentjs.com
    // return moment();

    // Or just use native Date objects (in general, not a good move)
    // return new Date();

    // Or just use unix epoch timestamps (integers, no timezones)
    // return (new Date()).getTime();
};
