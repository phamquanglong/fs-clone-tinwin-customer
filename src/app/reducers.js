import { combineReducers } from 'redux';
import defaultAddressReducer from '../redux/defaultAddress/reducers';
import notificationReducer from '../redux/notification/reducers';
import userReducer from '../redux/user/reducers';
import wishlistReducer from '../redux/wishlist/reducers';
import productReducer from '../redux/shop/reducers';
import searchReducer from '../redux/search/reducers';


const rootReducer = combineReducers({
  user: userReducer,
  wishlist: wishlistReducer,
  showNotification: notificationReducer,
  defaultAddress: defaultAddressReducer,
  product: productReducer,
  productName: searchReducer
});

export default rootReducer;
