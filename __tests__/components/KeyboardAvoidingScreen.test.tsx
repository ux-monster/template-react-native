/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import KeyboardAvoidingScreen from '@/components/KeyboardAvoidingScreen';

it('renders correctly', () => {
  renderer.create(<KeyboardAvoidingScreen />);
});
