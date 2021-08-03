/* eslint-disable no-param-reassign */
import axios from 'redaxios'

const axiosService = axios.create({
	baseURL: process.env.REACT_APP_BASE_API_URL,
	crossDomain: true,
	timeout: 30000,
})

export default axiosService
