import { bindActionCreators } from 'redux';
import { connect  }from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
	console.log("state is", state)
	return {
		posts: state.posts,
		comments: state.comments
	}
}

function mapDispatchToProps(dispatch) {
	console.log("dispatch is ", dispatch)
	return bindActionCreators(actionCreators, dispatch);
}
// you have your state values in store props that is in Provider
// and now you want these state values in child components and connect() helps you with that
//Connects listens to the store and get state from there

//The purpose of connect() is that you don't have to think about
// subscribing to the store or performance optimizations yourself, and
// instead you can specify how to get props based on Redux store state:
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;