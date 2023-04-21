import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Rockets from './rockets';
import store from '../redux/store';

describe('Rockets', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
