import { combineReducers, createStore } from 'redux';

const userReducer = (state={}, actions) => {
	switch(action.type){
		case 'CHANGE_NAME': {
			state = {...state, name: action.payload}
			//state.name = action.payload;
			break;
		}
		case 'CHANGE_AGE': {
			state = {...state, age: action.payload}
			break;
		}
	}
	return state;
};

const tweetReducer = (state=[], actions) => {
	
	return state;
};

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetReducer,
})

const store = createStore(reducers);

store.subscribe(()=>{
	console.log('store changed', store.getState())
})

store.dispatch({type: 'CHANGE_NAME', payload: "Will"})
store.dispatch({type: 'CHANGE_AGE', payload: 21})
store.dispatch({type: 'CHANGE_AGE', payload: 30})
