import React from 'react';

import { Card } from './styles';

//types for card component
interface CardProps extends React.PropsWithChildren<unknown> {
  cardClass?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
}

export default function CardComponent(props: CardProps) {
  const { children, cardClass, style, onClick } = props;

  //card component
  return (
    <Card style={style} className={cardClass} onClick={onClick}>
      {children}
    </Card>
  );
}
