import cookie from 'js-cookie';
import axiosInstance from '~/config/axiosConfig';

export const isLogin = async() => {
    let authToken = cookie.get('authorizationToken');
    let refreshToken = cookie.get('refreshToken');
        if (authToken) {
            let isValid = await axiosInstance.post('/tokenValidity', { token: refreshToken });
            if (isValid) {
                return true;
            } else {
                return false;
            }
        } else if (refreshToken && !authToken) {
            let newToken = await axiosInstance.post('/token', { token: refreshToken });
            if (newToken.data) {
                cookie.set('authorizationToken', (newToken.data).toString());
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
};
