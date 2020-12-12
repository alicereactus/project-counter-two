import React from 'react';
import Buttons from '../Buttons/Buttons';
import '../App.css';

type DisplayPropsType = {
  show: number | string
  count: number
  startValue: number
  maxValue: number
  reset: () => void
  increment: () => void
}

function Display(props: DisplayPropsType) {

  const classNameDisplayWrapper = (props.show === props.maxValue || props.show === 'Error') ? "Display-wrapper-max" : "Display-wrapper"

  return (

    <div className='Counter-wrapper'>
      <div className={classNameDisplayWrapper}>
       {props.show}
      </div>
      <Buttons increment={props.increment} reset={props.reset} show={props.show} startValue={props.startValue} maxCount={props.maxValue} />
    </div>

  );
}

export default Display;
