import React from 'react';
import { useResumeURL } from '.';

export const ConfigSection = () => {
    const url = useResumeURL();
    return <div>
        <a href={url} target="_blank" rel="noopener noreferrer">Open my resume</a>
    </div>;
}
