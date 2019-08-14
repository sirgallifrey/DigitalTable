import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import { store } from 'src/store/store';
import 'normalize.css';
import './main.css';
import { App } from 'src/app';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render((
	<StoreProvider store={store}>
		<App/>
	</StoreProvider>
),rootElement, console.log);
