import React from 'react';
import Loader from '../loader';

import { Button } from './styles';

interface ButtonProps extends React.PropsWithChildren<unknown> {
  value?: string;
  buttonClass?: string;
  buttonStyle?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
  loading?: boolean;
}

export default function ButtonComponent(props: ButtonProps) {
  const {
    value,
    buttonClass,
    buttonStyle,
    onClick,
    onSubmit,
    children,
    loading
  } = props;

  //button component
  return (
    <Button
      className={buttonClass}
      style={buttonStyle}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {loading ? <Loader /> : value || children}
    </Button>
  );
}
