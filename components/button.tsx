// components/AdjustableButton.tsx
import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import style from './button.module.css'
interface AdjustableButtonProps {
  children: string| JSX.Element | JSX.Element[];
  textsize: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}


const Button= ({ children, textsize, onClick }: AdjustableButtonProps) => {
  return <div style={{fontSize: textsize}} onClick={onClick} className={style.button}>{children}</div>
};

export default Button;