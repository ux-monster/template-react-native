import BottomSheet from '@components/BottomSheet';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}
        style={{
          marginTop: 40,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#dfdfdf',
        }}>
        <Text>Open BottomSheet</Text>
      </TouchableOpacity>
      {visible && (
        <BottomSheet
          onClosed={() => {
            setVisible(false);
          }}
        />
      )}
    </View>
  );
};

export default App;
