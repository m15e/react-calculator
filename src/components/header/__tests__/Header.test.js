import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

it('Header component matches snapshot', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
