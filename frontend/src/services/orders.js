import Api from './index'

export const getOrderListApi = (data) => Api.GET({url: "finance/orders-list", data});

export const getCheckoutApi = (data) => Api.GET({url: "finance/get-checkout", data});

