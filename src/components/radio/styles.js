import { StyleSheet } from 'react-native';
import Color from '../../themes/Color';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 8
  },
  radioContainer: {
    height: 14,
    width: 14,
    borderRadius: 7,
    borderColor: Color.SECONDARY_COLOR,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  radio: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Color.SECONDARY_COLOR
  },
  inputLabel: {
    fontSize: 18,
    color: Color.SECONDARY_COLOR,
  },
});

export default styles;
