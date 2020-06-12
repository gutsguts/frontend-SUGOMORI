import * as React from "react";

interface Props {
  text: string,
}
export function Text(props: Props) {
  return <div style={{ color: 'green' }}>{props.text}</div>;
}
