import {
  AlertCircleIcon,
  Box,
  Center,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  View,
} from '@gluestack-ui/themed';

import { styles } from './styles';

export default function Main() {
  return (
    <View style={styles.container}>
      <Center>
        <Box h="$32" w="$72">
          <FormControl size="md">
            <FormControlLabel mb="$1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="password" placeholder="password" />
            </Input>
            <FormControlHelper>
              <FormControlHelperText>Must be at least 6 characters.</FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>At least 6 characters are required.</FormControlErrorText>
            </FormControlError>
          </FormControl>
        </Box>
      </Center>
    </View>
  );
}
