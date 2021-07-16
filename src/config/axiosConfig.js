import axios from 'axios';

// Custom axios instance
// import Cookies from 'js-cookie'

const token = '';
// const token =
// eslint-disable-next-line max-len
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNzY3OTA5OTQxMzQ1ODc3OSIsIm5hbWUiOiJadWxsaWcgUGhhcm1hIiwiaWF0Ijo4NzU2MjMwMDk4fQ.tpuVnsAWSjeWtwEFbyDteEZYN4BGOz82EOq9pgkBJik"
const axiosInstance = axios.create({
    baseURL: '/api',
    headers: { Authorization: `Bearer ${token}` }
});
axiosInstance.CancelToken = axios.CancelToken;
axiosInstance.isCancel = axios.isCancel;

export default axiosInstance;
