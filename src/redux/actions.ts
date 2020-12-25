import { useDispatch as _useDispatch } from 'react-redux';

export enum ACTIONS_TYPE {
    SET_MAX_LOCAL_STORAGE_VALUE = 'SET-MAX-LOCAL-STORAGE-VALUE',
    SET_START_LOCAL_STORAGE_VALUE = 'SET-START-LOCAL-STORAGE-VALUE',
    SET_MAX_VALUE = 'SET-MAX-VALUE',
    SET_START_VALUE = 'SET-START-VALUE',
    SET_COUNT_VALUE = 'SET-COUNT-VALUE',
    SET_SHOW = 'SET-SHOW'
}

export type SetMaxLocalStorageValueType = {
    type: ACTIONS_TYPE.SET_MAX_LOCAL_STORAGE_VALUE,
    payload: { maxLocalStorageValue: number }
};

export const setMaxLocalStorageValueAC = (maxLocalStorageValue: number): SetMaxLocalStorageValueType => {
    return {
        type: ACTIONS_TYPE.SET_MAX_LOCAL_STORAGE_VALUE,
        payload: { maxLocalStorageValue }
    }
};

export type SetStartLocalStorageValueType = {
    type: ACTIONS_TYPE.SET_START_LOCAL_STORAGE_VALUE,
    payload: { startLocalStorageValue: number }
};

export const setStartLocalStorageValueAC = (startLocalStorageValue: number): SetStartLocalStorageValueType => {
    return {
        type: ACTIONS_TYPE.SET_START_LOCAL_STORAGE_VALUE,
        payload: { startLocalStorageValue }
    }
};

export type SetMaxValueType = {
    type: ACTIONS_TYPE.SET_MAX_VALUE,
    payload: { maxValue: number }
};

export const setMaxValueAC = (maxValue: number): SetMaxValueType => {
    return {
        type: ACTIONS_TYPE.SET_MAX_VALUE,
        payload: { maxValue }
    }
};

export type SetStartValueType = {
    type: ACTIONS_TYPE.SET_START_VALUE,
    payload: { startValue: number }
};

export const setStartValueAC = (startValue: number): SetStartValueType => {
    return {
        type: ACTIONS_TYPE.SET_START_VALUE,
        payload: { startValue }
    }
};

export type SetCountValueType = {
    type: ACTIONS_TYPE.SET_COUNT_VALUE,
    payload: { countValue: number }
};

export const setCountValueAC = (countValue: number): SetCountValueType => {
    return {
        type: ACTIONS_TYPE.SET_COUNT_VALUE,
        payload: { countValue }
    }
};

export type SetShowType = {
    type: ACTIONS_TYPE.SET_SHOW,
    payload: { show: number | string }
};

export const setShowAC = (show: number | string): SetShowType => {
    return {
        type: ACTIONS_TYPE.SET_SHOW,
        payload: { show }
    }
};

export type CounterReducersTypes =
    SetMaxLocalStorageValueType
    | SetStartLocalStorageValueType
    | SetMaxValueType
    | SetStartValueType
    | SetCountValueType
    | SetShowType

export function useDispatch() {
    const dispatch = _useDispatch();
    return (ac: CounterReducersTypes) => {
        dispatch(ac);
    }
}