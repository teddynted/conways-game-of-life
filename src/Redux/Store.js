import { createStore } from 'redux';
import reducer from './Reducers';

// mount it on the Store
const store = createStore(reducer);

export default store;