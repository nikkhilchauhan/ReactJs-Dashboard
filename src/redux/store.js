import { createStore } from 'redux';
import reducer from './reducers/index';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(reducer);
const persister = 'Tools';

export { store, persister };
