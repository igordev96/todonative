import { StyleSheet } from "react-native";
import { base } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    borderTopColor: base["gray-300"],
    borderTopWidth: 1,
    flex: 1,
    alignItems: "center",
    paddingTop: 48,
  },
  texts: {
    marginTop: 16,
  },
  text: {
    textAlign: "center",
    fontFamily: "Inter_500Medium",
    fontSize: 16,
    color: base["gray-300"],
  },
});
