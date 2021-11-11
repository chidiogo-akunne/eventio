import React from "react";

import { Card } from "./styles";

interface CardProps extends React.PropsWithChildren<unknown> {
  cardClass?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
}

export default function CardComponent(props: CardProps) {
  const { children, cardClass, style, onClick } = props;
  return (
    <Card style={style} className={cardClass} onClick={onClick}>
      {children}
    </Card>
  );
}
