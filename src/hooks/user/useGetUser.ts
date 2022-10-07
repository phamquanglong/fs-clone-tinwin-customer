import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import UserServices from '../../services/UserServices';

const useGetUser = () => {
  const [userInfo, setUserInfo] = useState({});

  var qs = require('qs');
  var data = qs.stringify({
    client_id: 'Mobile_Retailer',
    client_secret: '1q2w3E*',
    grant_type: 'password',
    username: '0332727355',
    password: '12345678Aa@',
  });

  const fn = async () => {
    await UserServices.login(data)
      .then(res => {
        AsyncStorage.setItem('token', res.data.access_token);
      })
      .catch(err => console.log(err));
    await UserServices.getUser()
      .then(res => {
        setUserInfo(res.data);
      })
      .catch(err => console.log(err));
  };
  fn();

  return userInfo;
};

export default useGetUser;
