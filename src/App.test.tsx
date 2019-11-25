import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const s = renderer.create(<App />);
  s.unmount();
});
