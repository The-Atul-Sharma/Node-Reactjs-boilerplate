// vendor modules
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// react modules
import App from '../src/App';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('app ui changes', () => {
    const AppComponent = renderer.create(<App />).toJSON();
    expect(AppComponent).toMatchSnapshot();
  });
});
