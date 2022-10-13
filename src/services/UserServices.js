import {get, post, postHeadersUrl, put, putUpload} from './AxiosHelper';

const UserServices = {
  getUser() {
    return get('/webbff/auth/api/account/my-profileauth/connect/userinfo');
  },
  login(postData) {
    return postHeadersUrl('/webbff/auth/connect/token', postData);
  },
  uploadAvatar(putData) {
    return putUpload(
      '/webbff/auth/api/account/my-profile/update-avatar',
      putData,
    );
  },
  updateInfo(putData) {
    return put('/webbff/auth/api/account/my-profile/update-profile', putData);
  },
  getUser1(params) {
    return get('/webbff/auth/api/account/my-profile', params);
  },
};

export default UserServices;
