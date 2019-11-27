import { combineReducers } from 'redux';
import temp from './temp'
import count from './count/reducer'
import category from './category/reducer'
import authentication from './authentication/reducer'
import user from './user/reducer'
import product from './product/reducer'
import currencyUnit from './currencyUnit/reducer'
import auction from './auction/reducer'
import faq from './faq/reducer'
import token from './token/reducer'
import { reducer as toastrReducer } from 'react-redux-toastr'
export default combineReducers({
    temp,
    count,
    category,
    authentication,
    user,
    product,
    currencyUnit,
    auction,
    faq,
    token,
    toastr: toastrReducer
});