import React, {PureComponent} from 'react';
import Home from './src/containers/Home';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import store from './src/redux/store';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

App.propTypes = {};

export default App;
