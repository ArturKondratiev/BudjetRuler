import { Button, Input, InputField, Checkbox, CheckIcon } from '@gluestack-ui/themed';
import React, { useState, useRef, useEffect } from 'react';
import { Swipeable } from 'react-native-gesture-handler';

import { Hoverable } from './Hoverable/Hoverable';

import { IListItem } from '~/helpers/interfaces';

interface IProps {
  todo: IListItem;
  todos: IListItem[];
  setTodos: (todos: IListItem[]) => void;
  swipedItemId: number;
  setSwipedItemId: (id: number) => void;
}

const SwipeableContainer = ({ todo, todos, setTodos, swipedItemId, setSwipedItemId }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastTap, setLastTap] = useState<number>(0);
  const [editItem, setEditItem] = useState(todo.task);
  const [editItemId, setEditItemId] = useState(0);
  const swipeableRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (swipedItemId !== null && swipedItemId !== todo.id) {
      swipeableRef.current?.close();
    }
  });

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const toggleCheckbox = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
  };
  const handleEdit = (id: number) => {
    setEditItemId(0);
    if (editItem !== '') {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, task: editItem } : todo,
      );
      setTodos(updatedTodos);
    } else {
      setEditItem(todo.task);
    }
  };
  const handleDoubleTap = () => {
    const now = Date.now();
    if (!lastTap) {
      setLastTap(now);
    } else {
      if (now - lastTap < 700) {
        setEditItemId(todo.id);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }
      setLastTap(0);
    }
  };
  const handleSwipeStart = () => {
    if (todo.id !== swipedItemId) setSwipedItemId(todo.id);
    setIsOpen(true);
  };

  const handleSwipeClose = () => {
    setSwipedItemId(0);
    setIsOpen(false);
  };

  const renderRightActions = () => {
    if (swipedItemId !== null && swipedItemId !== todo.id) {
      return null;
    }
    return (
      <Button
        zIndex={9999}
        h="$full"
        p="$3"
        bg="$error900"
        borderRadius="$none"
        onPress={() => handleDelete(todo.id)}
        focusable={false}
      />
    );
  };

  return (
    <Swipeable
      key={todo.id}
      onSwipeableWillOpen={handleSwipeStart}
      onSwipeableWillClose={handleSwipeClose}
      renderRightActions={renderRightActions}
      ref={swipeableRef}
      friction={1}>
      <Hoverable
        px="$6"
        py="$2"
        minHeight={38}
        flexDirection="row"
        bg={isOpen ? '$backgroundDark700' : '$backgroundDark900'}
        key={todo.id}
        alignItems="center"
        focusable={false}
        onPress={handleDoubleTap}>
        <Checkbox
          aria-label={todo.id.toString()}
          isChecked={todo.completed}
          value={todo.task}
          onChange={() => toggleCheckbox(todo.id)}
          size="sm"
          w="$full"
          borderColor="transparent">
          <Checkbox.Indicator>
            <Checkbox.Icon color="$backgroundDark900" as={CheckIcon} />
          </Checkbox.Indicator>
          <Input
            sx={{
              ':focus': {
                _web: {
                  boxShadow: 'none',
                },
              },
            }}
            borderWidth="$0"
            w="$full"
            h={22}>
            <InputField
              pl="$2"
              editable={!isOpen && editItemId === todo.id}
              value={editItem}
              color="$textDark50"
              fontSize="$sm"
              fontWeight="$normal"
              textDecorationLine={todo.completed ? 'line-through' : 'none'}
              onChangeText={(val) => setEditItem(val)}
              onSubmitEditing={() => handleEdit(todo.id)}
              onBlur={() => handleEdit(todo.id)}
              autoComplete="off"
              ref={inputRef}
            />
          </Input>
        </Checkbox>
      </Hoverable>
    </Swipeable>
  );
};
export { SwipeableContainer };
