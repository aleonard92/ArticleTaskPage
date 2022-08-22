import {createStore, combineReducers, applyMiddleware } from 'redux'
import thuks from 'redux-thunk'
import {articleReducer} from './reducers/articleReducer'
import {filterReducer} from './reducers/filterReducer'

const reducer = combineReducers({
    articles: articleReducer,
    filter: filterReducer
})

export const store = createStore(
    reducer,
    applyMiddleware(thuks)
)