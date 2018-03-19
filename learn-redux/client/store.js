import { createStore, compose} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'; //sync react-router with redux
//to connect react-router with redux
import { browserHistory } from 'react-router';

//import the root Reducer
import rootReducer from './reducers/index';
//import the default data
import comments from './data/comments';
import posts from './data/posts';

// create an object with default data
const defaultState = {
	posts:posts,
	comments:comments
}

const enhancers = compose(
	window.devToolsExtension? window.devToolsExtension() : fu => fu
);
//store accepts two arguments--> 1) reducer 2) defaultdState
const store1 = createStore(rootReducer, defaultState, enhancers);

//we'll use the history in reduxstagram file
export const history = syncHistoryWithStore(browserHistory, store1);

export default store1;