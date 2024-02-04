import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

import { Header, Main } from '~/components';


export default function App() {
  const bg = useColorModeValue('coolGray.50', 'coolGray.800');
  const color = useColorModeValue('coolGray.800', 'coolGray.50');
  return (
    <GluestackUIProvider config={config}>
      <Header />
      <Main />
    </GluestackUIProvider>
  );
}
