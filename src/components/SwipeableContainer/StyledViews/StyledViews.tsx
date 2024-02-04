import { styled } from '@gluestack-style/react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const StyledSafeAreaView = styled(SafeAreaView, {});

const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView, {});

const StyledGestureHandlerRootView = styled(GestureHandlerRootView, {});

const StyledScrollView = styled(ScrollView, {
  w: '$24',
});

export {
  StyledGestureHandlerRootView,
  StyledKeyboardAvoidingView,
  StyledSafeAreaView,
  StyledScrollView,
};
