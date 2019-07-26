import { StyleSheet } from 'react-native';
import { getDeviceWidth } from '../../utils';
import Color from '../../themes/Color';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.DARK_TRANSPARENT_BG,
  },
});

export default styles;
