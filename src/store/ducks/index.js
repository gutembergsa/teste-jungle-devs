import { combineReducers } from 'redux'

import homepageReducer from './homepage'

const reducers = combineReducers({
	homepage: homepageReducer,
})

export default reducers
