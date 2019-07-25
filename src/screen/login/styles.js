import { StyleSheet } from 'react-native';
import { getDeviceWidth, getDeviceHeight } from '../../utils';
import Color from '../../themes/Color';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.SECONDARY_COLOR,
    paddingTop: getDeviceHeight() / 8,
  },
  cardContainer: {
    padding: 20,
    backgroundColor: Color.SECONDARY_COLOR,
    borderWidth: 0.5,
    borderColor: Color.PRIMARY_COLOR,
    borderRadius: 6,
    marginTop: 20,
    width: getDeviceWidth() - 100,
    marginBottom: 20,
  },
  button: {
    width: getDeviceWidth() / 2 - 25,
    alignSelf: 'center',
    marginTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 50,
    width: getDeviceWidth() - 100,
  },
  titleFontContainer: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 10,
  },
  titleFont: {
    fontSize: 16,
    fontWeight: "bold"
  },
});

export default styles;
