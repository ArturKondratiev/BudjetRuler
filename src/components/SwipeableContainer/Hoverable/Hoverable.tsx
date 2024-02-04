import { Pressable } from '@gluestack-ui/themed';
import React, { ReactElement, useState } from 'react';

interface IProps {
  children?: ReactElement;
}

const Hoverable = ({ children, ...props }: IProps) => {
  const [hover, setHover] = useState(false);
  return (
    <Pressable
      states={{
        hover,
      }}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
      sx={{
        ':hover': {
          bg: '$backgroundDark700',
        },
      }}
      {...props}>
      {children}
    </Pressable>
  );
};
export { Hoverable };
