import { ChangeEvent } from 'react';
import Button from '../common/Button/Button';
import styles from './SetMenu.module.css';

type setMenuPropsType = {
  startValue: number
  maxValue: number
  show: number | string
  changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
  changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
  saveData: () => void
}

function SetMenu(props: setMenuPropsType) {

  const setMenuMaxClassName = (props.show === 'Error') ? styles.SetMenuMaxError : styles.SetMenuMaxWrapper
  const setMenuStartClassName = (props.show === 'Error') ? styles.SetMenuStartError : styles.SetMenuStartWrapper
  const btnSetClassName = (props.show === 'Set') ? styles.BtnSet : styles.BtnSetDisable

  return (
    <div className={styles.SetMenuWrapper}>
      <div className={setMenuMaxClassName}>
        <div>MAX VALUE:</div>
        <input type='number' value={localStorage.maxValue} onChange={props.changeMaxValue} />
      </div>
      <div className={setMenuStartClassName} >
        <div>START VALUE:</div>
        <input type='number' value={localStorage.startValue} onChange={props.changeStartValue} />
      </div>
      <div className={styles.BtnSetWrapper}>
        <Button title={'set'} className={btnSetClassName} onClick={props.saveData} />
      </div>
    </div>
  );
}

export default SetMenu;