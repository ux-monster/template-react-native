/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import TextInput from '@/ui/TextInput';

it('renders correctly', () => {
  renderer.create(<TextInput value="" onChangeText={() => {}} />);
});
