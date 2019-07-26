import { StyleSheet } from 'react-native';
import { getDeviceWidth, getDeviceHeight } from '../../utils';
import Color from '../../themes/Color';

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 200,
    backgroundColor: Color.PRIMARY_COLOR
  },
  inputLabel: {
    fontSize: 14,
    color: Color.SECONDARY_COLOR,
    marginBottom: 10
  },
  titleInput: {
    fontSize: 30,
    color: Color.SECONDARY_COLOR,
    marginBottom: 10
  },
  notesInput: {
    fontSize: 18,
    color: Color.SECONDARY_COLOR,
    marginBottom: 10
  },
  button: {
    width: getDeviceWidth() - 40,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default styles;
