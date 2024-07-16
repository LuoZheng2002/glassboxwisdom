// components/AdjustableButton.tsx
import React from 'react';
import styled from 'styled-components';

interface AdjustableButtonProps {
  children: string;
  textSize: string;
  onClick?: () => void;
}

const Button = styled.button<{ textSize: string }>`
  background-color: rgba(128, 128, 128, 0.5); // Half-transparent gray
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${(props) => props.textSize};
  font-weight: bold;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-family: 'Times New Roman', Times, serif;

  &:hover {
    background-color: rgba(128, 128, 128, 0.7);
  }
`;

const AdjustableButton: React.FC<AdjustableButtonProps> = ({ children, textSize, onClick }) => {
  return <Button textSize={textSize} onClick={onClick}>{children}</Button>;
};

export default AdjustableButton;