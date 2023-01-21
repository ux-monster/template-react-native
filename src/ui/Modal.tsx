import Text from '@/ui/Text';
import React from 'react';
import RN from 'react-native';

type Props = {};

const Modal = (props: Props) => {
  return (
    <RN.Modal>
      <Text>Button</Text>
    </RN.Modal>
  );
};

export default Modal;
