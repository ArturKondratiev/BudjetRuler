import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

import Main from '~/components/Main/Main';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Main />
    </GluestackUIProvider>
  );
}
