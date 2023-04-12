import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  shadow: {
    // iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // android
    elevation: 5,
  },
});

export default styles;
