import { Center, View, Text } from '@gluestack-ui/themed';

import { styles } from '../styles';

export default function Header() {
  return (
    <View style={styles.container} mt="$12">
      <Center>
        <Text>Budjet plan per month</Text>
      </Center>
    </View>
  );
}
