// components/RainbowButton.js
import React, { MouseEventHandler } from 'react';
import styles from './button.module.css'; // Import CSS module for styling
type Prop={
    children: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
const Button = ({ children, onClick }: Prop) => {
  return (
    <button className={styles.rainbowButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;