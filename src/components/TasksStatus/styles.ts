import { StyleSheet } from "react-native";
import { base, product } from "../../styles/colors";

export const styles = StyleSheet.create({
  tasksIndicators: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  text: {
    fontFamily: "Inter_700Bold",
    color: product.blue,
    fontSize: 20,
  },
  textDone: {
    fontFamily: "Inter_700Bold",
    color: product.purple,
    fontSize: 20,
  },
  badge: {
    width: 36,
    height: 24,
    borderRadius: 12,
    backgroundColor: base["gray-400"],
    justifyContent: "center",
    alignItems: "center",
  },
  badgeValue: {
    color: "#fff",
    fontFamily: "Inter_700Bold",
  },
});
