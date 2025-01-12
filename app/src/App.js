import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './styles/App.css';
import AppRouter from './components/Route/Router';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <AppRouter />
      </div>
    </Provider>
  );
};

export default App;
