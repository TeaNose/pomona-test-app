import { StyleSheet } from 'react-native';
import { getDeviceWidth, getDeviceHeight } from '../../utils';
import Color from '../../themes/Color';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.SECONDARY_COLOR
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 50
  },
  headerContainer: {
    height: 200,
    width: '100%',
    padding: 20,
    justifyContent: 'center'
  },
  titleText1: {
    color: Color.SECONDARY_COLOR,
    marginBottom: 10,
    fontSize: 16
  },
  titleText2: {
    color: Color.SECONDARY_COLOR,
    fontWeight: 'bold',
    fontSize: 30
  },
  titleText3: {
    color: Color.PRIMARY_COLOR,
    fontWeight: 'bold',
    fontSize: 16
  },
  descText: {
    color: Color.GREENY_BLUE,
    fontSize: 12
  },
  emptyText1: {
    color: Color.PRIMARY_COLOR,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  emptyText2: {
    color: Color.PRIMARY_COLOR,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20
  },
  buttonCircle: {
    backgroundColor: Color.PRIMARY_COLOR,
    height: 40,
    width: 40,
    borderRadius: 20
  },
  buttonCircleAbsolute: {
    backgroundColor: Color.PRIMARY_COLOR,
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'absolute',
    right: 10,
    bottom: 10,
    alignItems: 'center',
    zIndex: 2,
    paddingTop: 2,
    elevation: 5
  },
  cardItem: {
    backgroundColor: Color.SECONDARY_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    elevation: 1,
    borderWidth: 0.5,
    borderColor: Color.PRIMARY_COLOR,
    marginVertical: 8
  },
  doneStatusContainer: {
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: Color.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notDoneStatusContainer: {
    height: 25,
    width: 25,
    borderRadius: 15,
    borderColor: Color.LIGHT_BLUE_GREY,
    borderWidth: 0.5
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 5
  },
  tabActive: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomColor: Color.PRIMARY_COLOR,
    borderBottomWidth: 2
  },
  tabInactive: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomColor: Color.VERY_LIGHT_PINK,
    borderBottomWidth: 1
  },
  tabFontActive: {
    fontSize: 16,
    color: Color.PRIMARY_COLOR,
    fontWeight: 'bold'
  },
  tabFontInactive: {
    fontSize: 16,
    color: Color.VERY_LIGHT_PINK
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Color.VERY_LIGHT_PINK
  },
  search: {
    backgroundColor: Color.SECONDARY_COLOR,
    borderRadius: 6,
    paddingLeft: 10,
    paddingRight: 40,
  },
  searchIcon: {
    position: 'absolute',
    left: getDeviceWidth() - 55,
    top: 18
  }
});

export default styles;
