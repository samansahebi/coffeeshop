import Api from './index'

export const getProductListApi = (data) => Api.GET({url: "shop/product-list", data});

export const getProductApi = (data) => Api.GET({url: `shop/get-product/${data}`});

export const getCategoryListApi = (data) => Api.GET({url: "shop/category-list", data});
