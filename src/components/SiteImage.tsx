import * as React from "react";
import { Image } from '@zeit-ui/react'


// interface Props {
//   src: string
// }
// export function SiteImage(props: Props) {
export function SiteImage() {


  return (
    <Image
    width={540}
    height={160}
    src="http://www.deelay.me/2000/https://react.zeit-ui.co/images/custom-domains.png" />
    // src={props.src} />
      
  );
}
