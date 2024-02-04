import {
  Box,
  Center,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  View,
} from '@gluestack-ui/themed';
import { useCallback, useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

import CostsList from '../CostsList/CostsList';
import { styles } from '../styles';

export default function Main() {
  const [budjet, setBudjet] = useState('');
  const [firstPartBudjet, setFirstPartBudjet] = useState('');
  const [secondPartBudjet, setSecondPartBudjet] = useState('');
  const [thirdPartBudjet, setThirdPartBudjet] = useState('');

  let splitedBudjet: {
    budjetValue: string;
    firstPartBudjetValue: number;
    secondPartBudjetValue: number;
    thirdPartBudjetValue: number;
  };
  const handleBudjet = useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const budjetValue = e.nativeEvent.text;
    splitedBudjet = {
      budjetValue,
      firstPartBudjetValue: +budjetValue * 0.5,
      secondPartBudjetValue: +budjetValue * 0.3,
      thirdPartBudjetValue: +budjetValue * 0.2,
    };
    setBudjet(splitedBudjet.budjetValue);
    setFirstPartBudjet(splitedBudjet.firstPartBudjetValue.toString());
    setSecondPartBudjet(splitedBudjet.secondPartBudjetValue.toString());
    setThirdPartBudjet(splitedBudjet.thirdPartBudjetValue.toString());
    return splitedBudjet;
  }, []);

  return (
    <View style={styles.container}>
      <Center>
        <Box h="$32" w="$full">
          <FormControl size="md">
            <FormControlLabel mb="$1">
              <FormControlLabelText>Your current budjet: {budjet || 0}</FormControlLabelText>
            </FormControlLabel>
            <Input w="$32">
              <InputField
                placeholder="Enter budjet"
                keyboardType="numeric"
                onChange={handleBudjet}
              />
            </Input>

            <FormControlLabel mb="$1">
              <FormControlLabelText>50% asdasdasdasdas({firstPartBudjet})</FormControlLabelText>
            </FormControlLabel>
            <Input w="$32">
              <InputField placeholder="50%" />
            </Input>
            <CostsList />

            <FormControlLabel mb="$1">
              <FormControlLabelText>30% ({secondPartBudjet})</FormControlLabelText>
            </FormControlLabel>
            <Input w="$32">
              <InputField placeholder="30%" />
            </Input>

            <FormControlLabel mb="$1">
              <FormControlLabelText>20% ({thirdPartBudjet})</FormControlLabelText>
            </FormControlLabel>
            <Input w="$32">
              <InputField placeholder="20%" />
            </Input>
          </FormControl>
        </Box>
      </Center>
    </View>
  );
}
