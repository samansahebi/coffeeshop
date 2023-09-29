import Api from './index'

export const getOrderListApi = (data) => Api.GET({url: "finance/orders-list", data});

export const getCheckoutApi = (data) => Api.GET({url: "finance/get-checkout", data});

export const getPackageTypesApi = (data) => Api.GET({url: "finance/get-package-types", data});

export const addToCheckoutApi = (data) => Api.POST({url: "finance/create-order", data});

