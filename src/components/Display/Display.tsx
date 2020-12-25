import React from 'react';

import Button from '../common/Button/Button';

import styles from './Display.module.css'


type DisplayPropsType = {
  show: number | string
  count: number
  startValue: number
  maxValue: number
  reset: () => void
  increment: () => void
}

function Display(props: DisplayPropsType) {

  const classNameDisplayWrapper = (props.show === props.maxValue || props.show === 'Error') ? styles.DisplayWrapperMax : styles.DisplayWrapper

  const classNameBtnIncrement = props.show === props.maxValue || props.show === 'Set' || props.show === 'Error' ? styles.BtnIncrementMax : styles.BtnIncrement
  const classNameBtnReset = props.show === props.startValue || props.show === 'Set' || props.show === 'Error' ? styles.BtnResetStart : styles.BtnReset
  return (
    <div className={styles.CounterWrapper}>
      <div className={classNameDisplayWrapper}>
        {props.show}
      </div>
      <div className={styles.BtnWrapper}>
        <Button title={'inc'} className={classNameBtnIncrement} onClick={props.increment} />
        <Button title={'res'} className={classNameBtnReset} onClick={props.reset} />
      </div>
    </div>

  );
}

export default Display;
