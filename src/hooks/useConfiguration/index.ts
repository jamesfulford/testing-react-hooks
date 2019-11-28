import { useContext, createContext } from 'react';

const defaultConfig = {
    baseurl: 'https://localhost:1948',
    env: 'dev',
};

export const ConfigurationContext = createContext(defaultConfig);

export const useResumeURL = () => {
    const { baseurl } = useContext(ConfigurationContext);
    return `${baseurl}/resume/latest.pdf`;
};
