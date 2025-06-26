import { combineReducers } from 'redux';
import { productReducer, SelectedProductReducer } from './ProductReducer';
import { selectedProduct } from '../Actions/ProductActions';


const reducers = combineReducers({
    allProducts: productReducer,
    product: SelectedProductReducer
});

export default reducers;