import { StyleSheet } from "react-native";
import { base } from "../../styles/colors";

export const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: base["gray-700"],
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 32,
    width: 120,
  },
});
