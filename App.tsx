import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

import { Header, Main } from '~/components';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Header />
      <Main />
    </GluestackUIProvider>
  );
}
