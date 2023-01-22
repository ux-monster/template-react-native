import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const useHaptic = () => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const haptic = () => {
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  return haptic;
};

export default useHaptic;
