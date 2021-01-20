import {ChangeEvent} from 'react';
import '../App.css';

type setMenuPropsType = {
  startValue: number
  maxValue: number
  show: number | string
  changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
  changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
  saveData: () => void
}

function SetMenu(props: setMenuPropsType) {

  const setMenuMaxClassName = (props.show === 'Error') ? 'Set-menu-max-error' : 'Set-menu-max-wrapper'
  const setMenuStartClassName = (props.show === 'Error') ? 'Set-menu-start-error' : 'Set-menu-start-wrapper'
  const btnSetClassName = (props.show === 'Set') ? 'Btn-set' : 'Btn-set-disable' 

  return (

    <div className='Set-menu-wrapper'>
      <div className={setMenuMaxClassName}>
        <div>MAX VALUE:</div>
        <input type='number' defaultValue={props.maxValue} value={localStorage.maxValue} onChange={props.changeMaxValue} />
      </div>
      <div className={setMenuStartClassName} >
        <div>START VALUE:</div>
        <input type='number' defaultValue={props.startValue} value={localStorage.startValue} onChange={props.changeStartValue} />
      </div>
      <div className='Btn-set-wrapper'>
        <div className={btnSetClassName}>
          <button onClick={props.saveData}>set</button>
        </div>
      </div>
    </div>

  );
}

export default SetMenu;