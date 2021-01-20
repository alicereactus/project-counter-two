import '../App.css';

type ButtonsPropsType = {
  show: number | string
  startValue: number
  maxCount: number
  increment: () => void
  reset: () => void
}

function Buttons(props: ButtonsPropsType) {

  const classNameBtnIncrement = props.show === props.maxCount || props.show === 'Set' || props.show === 'Error' ? "Btn-increment-max" : "Btn-increment"
  const classNameBtnReset = props.show === props.startValue || props.show === 'Set' || props.show === 'Error' ? "Btn-reset-start" : "Btn-reset"

  return (

    <div className="Btn-wrapper">
      
      <div className={classNameBtnIncrement}>
        <button onClick={props.increment}>inc</button>
      </div>

      <div className={classNameBtnReset}>
        <button onClick={props.reset}>reset</button>
      </div>

    </div>
  );
}

export default Buttons;