import * as React from "react";
import { useToasts } from '@zeit-ui/react'
import { Button } from '@zeit-ui/react'


export function ZeitToast() {
  const [toasts, setToast] = useToasts()
  const click = () => setToast({ text: 'The Evil Rabbit jumped over the fence.' })
  return <Button onClick={click}>Show Toast</Button>
}
