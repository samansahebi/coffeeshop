import {toast} from "react-toastify";
import store from '../../redux/store';
import {refreshTokenApi} from "../authorization";
import {refreshTokenAction} from "../../redux/authentication/action";
import {ApiCreator} from "../index";

export const ServerErrorHandling = async (AxiosError, hasToast = true, apiProps) => {
    const isRef = apiProps?.isRef || false
    const {authentication: {refresh, access}} = store.getState()
    if (AxiosError.response) {
        if (!isRef) {
            switch (AxiosError.response.status) {
                case 401:
                    if (access) {
                        const refRes = await refreshTokenApi({refresh})
                        if (refRes) {
                            store.dispatch(refreshTokenAction(refRes))
                            const res = await ApiCreator(apiProps)
                            return res
                        } else {
                            window.localStorage.clear();
                            window.location.reload();
                        }
                        break;
                    } else {
                        if (hasToast)
                            toast.error(AxiosError.response.data?.message || 'خطایی رخ داده است')
                        console.log('error::::::::::>', AxiosError.response.data);
                        break;
                    }
                case 500:
                    if (hasToast)
                        toast.error('خطای داخلی رخ داده است')
                    return;
                case 400:
                    return AxiosError.response.data
                default:
                    if (hasToast)
                        toast.error(AxiosError.response.data?.message || 'خطایی رخ داده است')
                    console.log('error::::::::::>', AxiosError.response.data?.message);
                    return;
            }
        } else {
            return
        }
    } else {
        toast.dismiss();
        toast.error('مشکل در اتصال به اینترنت در صورت استفاده از فیلتر شکن آن را خاموش کنید');
        return;
    }
    throw AxiosError;
};
