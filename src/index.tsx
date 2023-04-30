import React from 'react';
import ReactDOM from 'react-dom/client';
// import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {Loading} from './components/Loading';
import Calculator from './components/Calculator';
import { Provider } from 'react-redux';
import store from './store';
import './index.css'

export const Index = (): JSX.Element => {
  return (
		<Provider store={store}>
			<App>
				<React.Suspense fallback={<Loading />}>
					<main className='Application'>
						<Calculator />
					</main>
				</React.Suspense>
			</App>
		</Provider>
	);
};

Index.displayName = 'Index';

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

/**
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
// eslint-disable-next-line no-console
reportWebVitals(console.log);
