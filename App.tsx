import { NativeBaseProvider } from 'native-base';
import React from 'react';

import Test from '~/components/Test';

export default function App() {
  return (
    <NativeBaseProvider>
      <Test />
    </NativeBaseProvider>
  );
}
