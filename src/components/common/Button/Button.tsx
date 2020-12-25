import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonPropsType = DefaultButtonPropsType & {
  title: string
}

function Button(props: ButtonPropsType) {

  return (
      <div className={props.className}>
        <button onClick={props.onClick}>{props.title}</button>
      </div>
  );
}

export default Button;