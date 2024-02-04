import { Center, View, Text } from '@gluestack-ui/themed';

import { styles } from '../styles';

import { getDay } from '~/utils/getCurrentDay';

export default function Header() {
  return (
    <View style={styles.container} mt="$12">
      <Center>
        <Text color="#9f9f9f" fontWeight="$bold" fontSize="$xl">
          Today is {getDay()}
        </Text>
        <Text>Budjet plan per month</Text>
      </Center>
    </View>
  );
}
