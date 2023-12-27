import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { router } from './navigation/navigation.tsx'
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

const persisitor = persistStore(store)

const RunFuncion = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persisitor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RunFuncion />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
