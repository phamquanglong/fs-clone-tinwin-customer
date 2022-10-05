import { GET_USER, UPDATE_INFO_USER } from "./constants";

interface UserState {
  user: object
}

const initState: UserState = {
  user: {
    id: '1',
  name: 'Pham Quang Long',
  gender: 'Nam',
  dob: '05/01/2001',
  email: 'longpq@comartek.com',
  phoneNumber: '0123456789',
  avatar: require('../../assets/logoTinwinPrimary.png')
  }
};

const userReducer = (state = initState, action: any) => {
  switch (action?.type) {
    case GET_USER:
      return state;
    case UPDATE_INFO_USER:
      // console.log('a')
      return {...state, user: action.payload}
    default:
      return state;
  }
};

export default userReducer;
