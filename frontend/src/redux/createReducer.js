import {LOGOUT} from "./authentication/types";

export default function createReducer(funcMap, initialState) {
    funcMap[LOGOUT]= state => ({})
    return (state = initialState, action) => {
        if (funcMap[action.type] !== undefined) {
            return funcMap[action.type](state, action);
        }
        return state;
    };
}
