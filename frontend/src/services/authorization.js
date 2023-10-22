import Api from './index'

export const getProfileApi = (data) => Api.GET({url: "customers/customer-info", data});

export const sendOtpApi = (data) => Api.POST({url: "users/send-otp", data});

export const loginApi = (data) => Api.POST({url: "users/login", data});

export const logoutApi = (data) => Api.POST({url: "users/logout", data});

export const refreshTokenApi = (data) => Api.POST({url: "users/refresh", isRef: true, data});

export const getProvinceApi = (data) => Api.GET({url: "customers/get-provinces", data});

export const getCityApi = (data) => Api.GET({url: "customers/get-cities", data});

export const createAddressApi = (data) => Api.POST({url: "customers/create-address", data});
