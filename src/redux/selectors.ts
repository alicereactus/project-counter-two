import { IGlobalState} from './state';
interface IRootState extends IGlobalState {};

export const selectMaxLocalStorageValue = (state: IRootState) => state.counter.maxLocalStorageValue;
export const selectStartLocalStorageValue = (state: IRootState) => state.counter.startLocalStorageValue;
export const selectMaxValue = (state: IRootState) => state.counter.maxValue;
export const selectStartValue = (state: IRootState) => state.counter.startValue;
export const selectCountValue = (state: IRootState) => state.counter.countValue;
export const selectShow = (state: IRootState) => state.counter.show;

export const selectAll = (state: IRootState) => state.counter;
