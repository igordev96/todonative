import { StyleSheet } from "react-native";
import { base, product } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: base["gray-600"],
    paddingBottom: 16,
  },
  body: {
    flex: 4,
    paddingHorizontal: 16,
  },
  newTask: {
    flexDirection: "row",
    gap: 12,
    marginTop: -32,
  },
  input: {
    flex: 1,
    backgroundColor: base["gray-500"],
    borderRadius: 6,
    fontFamily: "Inter_500Medium",
    color: base["gray-300"],
    fontSize: 20,
    paddingHorizontal: 12,
  },
  button: {
    height: 64,
    width: 64,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: product["blue-dark"],
  },
});
