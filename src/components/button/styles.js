import { StyleSheet } from "react-native";
import { getDeviceWidth } from "../../utils";
import Color from "../../themes/Color";

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Color.PRIMARY_COLOR,
    width: getDeviceWidth() / 2,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  secondaryButton: {
    backgroundColor: Color.SECONDARY_COLOR,
    width: getDeviceWidth() / 2,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText1: {
    color: Color.PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: "bold"
  },
  buttonText2: {
    color: Color.SECONDARY_COLOR,
    fontSize: 16,
    fontWeight: "bold"
  },
});

export default styles;
