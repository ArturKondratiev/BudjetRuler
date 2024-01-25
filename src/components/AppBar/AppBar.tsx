import { MaterialIcons } from '@expo/vector-icons';
import {
  HStack,
  IconButton,
  Icon,
  Text,
  StatusBar,
  useColorMode,
  Pressable,
  SunIcon,
  MoonIcon,
  useColorModeValue,
  View,
} from 'native-base';
import React from 'react';

const AppBar = () => {
  const { toggleColorMode } = useColorMode();

  const modeIcons = useColorModeValue(
    <SunIcon color="coolGray.50" size="6" />,
    <MoonIcon color="coolGray.800" size="6" />,
  );

  return (
    <View>
      <StatusBar barStyle="default" />
      <HStack
        bg="lightBlue.800"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <Pressable px="3" onPress={toggleColorMode}>
          {modeIcons}
        </Pressable>
      </HStack>
    </View>
  );
};
export default AppBar;
