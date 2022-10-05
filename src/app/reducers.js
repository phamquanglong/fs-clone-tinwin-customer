import {combineReducers} from 'redux';
import defaultAddressReducer from '../redux/defaultAddress/reducers';
import notificationReducer from '../redux/notification/reducers';
import userReducer from '../redux/user/reducers';
import wishlistReducer from '../redux/wishlist/reducers';

const rootReducer = combineReducers({
  user: userReducer,
  wishlist: wishlistReducer,
  showNotification: notificationReducer,
  defaultAddress: defaultAddressReducer,
});

export default rootReducer;
