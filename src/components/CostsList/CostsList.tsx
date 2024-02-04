import { HStack, Text, Pressable, Icon, AddIcon, Box } from '@gluestack-ui/themed';
import React, { useRef, useState } from 'react';
import { uid } from 'uid';

import { ProgressBar } from '../ProgressBar/ProgressBar';
import {
  StyledGestureHandlerRootView,
  StyledKeyboardAvoidingView,
  StyledSafeAreaView,
  StyledScrollView,
} from '../SwipeableContainer/StyledViews/StyledViews';
import { SwipeableContainer } from '../SwipeableContainer/SwipeableContainer';

import { IListItem } from '~/helpers/interfaces';
import defaultTodos from '~/utils/costsList.mock';

export default function CostsList() {
  const [item, setItem] = useState('');
  const [todos, setTodos] = useState(defaultTodos);
  const [swipedItemId, setSwipedItemId] = useState(0);
  const [lastItemSelected, setLastItemSelected] = useState(false);
  const inputRef = useRef(null);

  const addTodo = () => {
    const lastTodo = todos[todos.length - 1];
    const generatedId = parseInt(uid().replace(/\D/g, ''), 10);

    if (lastTodo.task !== '') {
      setTodos([
        ...todos,
        {
          id: generatedId,
          task: '',
          completed: false,
        },
      ]);
      setItem('');
      setLastItemSelected(false);
    }
  };

  const getCompletedTasks = (todos: IListItem[], lastItemSelected: boolean) => {
    let complete = 0;
    todos.forEach((item: IListItem) => {
      if (item.completed) {
        complete++;
      }
    });
    if (lastItemSelected) return complete + 1;
    else return complete;
  };

  return (
    <StyledKeyboardAvoidingView
      w="$full"
      h="$full"
      bg="$backgroundDark900"
      behavior="padding"
      keyboardVerticalOffset={60}>
      <StyledSafeAreaView $base-bg="$backgroundDark900" $md-bg="$black" w="$full">
        <StyledGestureHandlerRootView
          w="$full"
          minHeight="$full"
          $md-justifyContent="center"
          $md-alignItems="center"
          $md-bg="$black">
          <StyledScrollView
            pt="$6"
            pb="$10"
            bg="$backgroundDark900"
            $base-w="$full"
            $md-w={700}
            $md-maxHeight={500}
            $md-borderRadius="$sm"
            flexDirection="column">
            <Box px="$6">
              <ProgressBar
                completedTasks={getCompletedTasks(todos, item !== '' && lastItemSelected)}
                totalTasks={item !== '' ? todos.length + 1 : todos.length}
              />
            </Box>

            {todos.map((todo: IListItem, index: number) => (
              <SwipeableContainer
                key={index}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                swipedItemId={swipedItemId}
                setSwipedItemId={setSwipedItemId}
              />
            ))}

            <Pressable
              mb="$32"
              px="$6"
              $md-mb={0}
              onPress={() => {
                addTodo();
                setTimeout(() => {
                  if (inputRef?.current) {
                    inputRef?.current.focus();
                  }
                }, 100);
              }}>
              <HStack alignItems="center" mt="$4">
                <Icon as={AddIcon} color="$secondary600" />
                <Text ml="$2" fontSize="$sm" color="$textDark50">
                  Add Task
                </Text>
              </HStack>
            </Pressable>
          </StyledScrollView>
        </StyledGestureHandlerRootView>
      </StyledSafeAreaView>
    </StyledKeyboardAvoidingView>
  );
}
