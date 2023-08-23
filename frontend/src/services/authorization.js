import Api from './index'

export const loginApi = (data) => Api.POST({url: "api/token/", data});

export const logoutApi = (data) => Api.POST({url: "api/logout/", data});

export const refreshTokenApi = (data) => Api.POST({url: "api/token/refresh/", isRef: true, data});

export const captchaApi = (data) => Api.POST({url: "api/captcha/", data});
