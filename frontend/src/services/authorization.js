import Api from './index'

export const sendOtpApi = (data) => Api.POST({url: "users/send-otp", data});

export const loginApi = (data) => Api.POST({url: "users/login", data});

export const logoutApi = (data) => Api.POST({url: "users/logout", data});

export const refreshTokenApi = (data) => Api.POST({url: "users/refresh", isRef: true, data});