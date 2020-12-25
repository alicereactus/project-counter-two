import React, { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import Display from './components/Display/Display';
import SetMenu from './components/SetMenu/SetMenu';

import './App.css';
import { selectAll } from './redux/selectors';
import { setCountValueAC, setMaxLocalStorageValueAC, setMaxValueAC, setShowAC, setStartLocalStorageValueAC, setStartValueAC, useDispatch } from './redux/actions';

function AppWithRedux() {

  let dispatch = useDispatch();
  const { maxLocalStorageValue, startLocalStorageValue, maxValue, startValue, countValue, show } = useSelector(selectAll);

  const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    let parseStart: number = +e.currentTarget.value
    if (parseStart >= -1 && maxLocalStorageValue >= -1) {
      dispatch(setStartLocalStorageValueAC(parseStart))
      dispatch(setShowAC('Set'))
      localStorage.setItem('startValue', JSON.stringify(Number(e.currentTarget.value)))
    } else if (parseStart < -1 || parseStart >= maxLocalStorageValue || maxLocalStorageValue < 0) {
      dispatch(setShowAC('Error'))
    }
  }

  const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    let parseMax: number = +e.currentTarget.value
    if (parseMax >= -1 && startLocalStorageValue >= -1) {
      dispatch(setMaxLocalStorageValueAC(parseMax))
      dispatch(setShowAC('Set'))
      localStorage.setItem('maxValue', JSON.stringify(Number(e.currentTarget.value)))
    } else if (parseMax < -1 || parseMax <= startLocalStorageValue || startLocalStorageValue < 0) {
      dispatch(setShowAC('Error'))
    }
  }

  function increment() {
    if (countValue < maxValue && startLocalStorageValue >= 0 && maxLocalStorageValue >= 0 && startLocalStorageValue < maxLocalStorageValue && maxValue === maxLocalStorageValue && startValue === startLocalStorageValue) {
      let value = countValue + 1
      dispatch(setCountValueAC(value))
      dispatch(setShowAC(value))
    } else if (maxValue !== maxLocalStorageValue && startValue !== startLocalStorageValue) {
      dispatch(setShowAC('Set'))
    }
  }

  function reset() {
    if (startLocalStorageValue >= 0 && maxLocalStorageValue >= 0 && startLocalStorageValue < maxLocalStorageValue && maxValue === maxLocalStorageValue && startValue === startLocalStorageValue) {
      dispatch(setCountValueAC(Number(localStorage.startValue)))
      dispatch(setShowAC(Number(localStorage.startValue)))
    } 
    else if (maxValue !== maxLocalStorageValue && startValue !== startLocalStorageValue) {
      dispatch(setShowAC('Set'))
    }
  }

  const saveData = () => {
    if (startLocalStorageValue >= 0 && maxLocalStorageValue >= 0 && startLocalStorageValue < maxLocalStorageValue) {
      dispatch(setMaxValueAC(Number(localStorage.maxValue)))
      dispatch(setStartValueAC(Number(localStorage.startValue)))
      dispatch(setCountValueAC(Number(localStorage.startValue)))
      dispatch(setShowAC(Number(localStorage.startValue)))
    } else {
      dispatch(setShowAC('Error'))
    }
  }

  return (
    <div className='App-wrapper'>

      <SetMenu
        startValue={startValue}
        maxValue={maxValue}
        show={show}
        changeMaxValue={changeMaxValue}
        changeStartValue={changeStartValue}
        saveData={saveData} />
      <Display
        startValue={startValue}
        maxValue={maxValue}
        count={countValue}
        show={show}
        increment={increment}
        reset={reset} />
    </div>
  );
}

export default AppWithRedux;