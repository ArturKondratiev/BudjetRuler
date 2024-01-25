import { NativeBaseProvider, View, useColorModeValue } from 'native-base';
import React from 'react';

import AppBar from '~/components/AppBar/AppBar';

export default function App() {
  const bg = useColorModeValue('coolGray.50', 'coolGray.800');
  const color = useColorModeValue('coolGray.800', 'coolGray.50');
  return (
    <NativeBaseProvider>
      <View bgColor={bg} color={color} height="100%">
        <AppBar />
      </View>
    </NativeBaseProvider>
  );
}
