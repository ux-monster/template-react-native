import Text from '@/ui/Text';
import React from 'react';
import RN from 'react-native';

type Props = {};

const Button = (props: Props) => {
  return (
    <RN.TouchableHighlight>
      <Text>Button</Text>
    </RN.TouchableHighlight>
  );
};

export default Button;
