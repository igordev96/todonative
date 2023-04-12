import { StyleSheet } from "react-native";
import { base, product } from "../../styles/colors";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: base["gray-500"],
    flexDirection: "row",
    alignItems: "center",
    height: 64,
    borderRadius: 8,
    paddingHorizontal: 16,
    gap: 8,
  },
  description: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    color: base["gray-100"],
  },
  descriptionDone: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    color: base["gray-300"],
    textDecorationLine: "line-through",
    textDecorationColor: "white",
  },
  check: {
    backgroundColor: product["purple-dark"],
    height: 24,
    width: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  uncheck: {
    borderWidth: 2,
    borderColor: product["blue"],
    height: 24,
    width: 24,
    borderRadius: 100,
  },
});
