import { ACTIONS_TYPE, CounterReducersTypes } from './actions';

export type CounterState = {
    maxLocalStorageValue: number,
    startLocalStorageValue: number,
    maxValue: number,
    startValue: number,
    countValue: number,
    show: number | string
};

const initialState: CounterState = {
    maxLocalStorageValue: Number(localStorage.maxValue) ? Number(localStorage.maxValue) : 5,
    startLocalStorageValue: Number(localStorage.startValue) ? Number(localStorage.startValue) : 0,
    maxValue: Number(localStorage.maxValue) ? Number(localStorage.maxValue) : 5,
    startValue: Number(localStorage.startValue) ? Number(localStorage.startValue) : 0,
    countValue: Number(localStorage.startValue) ? Number(localStorage.startValue) : 0,
    show: Number(localStorage.startValue) ? Number(localStorage.startValue) : 0
};

export const counterReducer = (state: CounterState = initialState, action: CounterReducersTypes): CounterState => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_MAX_LOCAL_STORAGE_VALUE:
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPE.SET_START_LOCAL_STORAGE_VALUE:
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPE.SET_MAX_VALUE:
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPE.SET_START_VALUE:
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPE.SET_COUNT_VALUE:
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPE.SET_SHOW:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
