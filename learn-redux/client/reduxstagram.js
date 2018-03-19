// let's go!
import React from 'react';
import  { render } from 'react-dom';

//import css
import css from './styles/style.styl';

//import components
import App from './components/App';
import Main from './components/Main';

import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react-router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux'; // to connect react with redux
import store1, { history } from './store';
// provider will expose our actual store data to react

//connect will allow to inject the data at whatever level you want
const router = (
	<Provider store={store1}>
		<Router history={browserHistory} store={store1}>
			<Route path="/" component= {App}>
				<IndexRoute component={PhotoGrid}/>
				<Route path="/view/:postId" component={Single}/>
			</Route>
		</Router>
	</Provider>
)


render(router, document.getElementById('root'));