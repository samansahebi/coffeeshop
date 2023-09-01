import Api from './index'

export const getOrderListApi = (data) => Api.GET({url: "finance/orders-list", data});

