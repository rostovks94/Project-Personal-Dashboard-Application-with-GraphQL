import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, createClient, fetchExchange } from 'urql';
import App from './App';

const client = createClient({
  url: 'https://graphqlzero.almansi.me/api',
  exchanges: [fetchExchange], 
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);