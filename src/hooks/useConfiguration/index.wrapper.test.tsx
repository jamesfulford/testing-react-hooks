import React, { FunctionComponent, ReactNode } from 'react';
import { useResumeURL, ConfigurationContext } from '.';
import { renderHook } from '@testing-library/react-hooks';

describe('useResumeURL (context)', () => {
    const makeWrapper = (value: any): FunctionComponent => ({ children }: { children?: ReactNode }) => (
        <ConfigurationContext.Provider value={value}>
            {children}
        </ConfigurationContext.Provider>
    );

    it('should use context provided config', () => {
        const { result } = renderHook(
            () => useResumeURL(),
            {
                wrapper: makeWrapper({ baseurl: '{baseurl}', env: '{env}' }),
            },
        );

        expect(result.current).toBe('{baseurl}/resume/latest.pdf');
    });

    it('should use default config', () => {
        const { result } = renderHook(
            () => useResumeURL(),
        );

        expect(result.current).toBe('https://localhost:1948/resume/latest.pdf');
    });
});
