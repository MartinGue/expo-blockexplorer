import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.danger,
    fontSize: 17,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    alignItems: "center",
    alignContent: "center",
    padding: 9,
  },
};
