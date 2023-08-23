import axios from 'axios';
import {ServerErrorHandling} from './errorHandling';
import store from '../redux/store';
import queryBuilder from '../helpers/query-builder'

const config = {
    baseURL: process.env.REACT_APP_HOST,
    timeout: 1200000,
    responseType: 'json',
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    onUploadProgress: (progressEvent) => {
    },
    onDownloadProgress: (progressEvent) => {
    },
    maxContentLength: 2000,
    maxBodyLength: 2000,
    validateStatus: (status) => status >= 200 && status < 300,
    maxRedirects: 5,
    cancelToken: new axios.CancelToken((cancel) => {
    })
};

export const ApiCreator = async (props) => {
    const {data, headers, method, query = '', token, url, responseType, ott, hasToast = true,isRef} = props
    const Authorization_ = store.getState().authentication.access || token;
    const customConfig = {
        ...config,
        headers: {
            'Accept-Language': 'fa',
            ...((!isRef && Authorization_) && {Authorization: `Bearer ${Authorization_}`}),
            ...(ott && {ott: `Bearer ${ott}`}),
            ...(headers && {...headers}),
        },
        url: `${url}${query && queryBuilder(query)}`,
        method: method,
        data: data,
        ...(responseType && {responseType: responseType})
    }
    return await axios(customConfig)
        .then((res) => res.data)
        .catch((err) => ServerErrorHandling(err, hasToast,props))
};

class Api {
    static GET = (props) => ApiCreator({...props, method: 'get'});

    static POST = (props) => ApiCreator({...props, method: 'post'});

    static PUT = (props) => ApiCreator({...props, method: 'put'});

    static PATCH = (props) => ApiCreator({...props, method: 'patch'});

    static DELETE = (props) => ApiCreator({...props, method: 'delete'});
}

export default Api;
