import * as React from 'react';
// import HomePage from '../HomePage';
import { useState } from 'react';
import { Text } from '../components/Text';
import { ZeitBtn } from '../components/ZeitBtn';
import { ZeitToast } from '../components/ZeitToast';
import { SiteImage } from '../components/SiteImage';

export function ZeitSample() {
  const [text, setText] = useState('');

  return (
    <div>
      <h4>
        <Text text={text} />
        入力して下さい
      </h4>
      <ZeitBtn />
      <SiteImage />
      <ZeitToast />
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}
