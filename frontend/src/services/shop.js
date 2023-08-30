import Api from './index'

export const getProductListApi = (data) => Api.GET({url: "shop/product-list", data});
