import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import Home from "./src/screens/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Home />
      <StatusBar translucent={false} style="light" />
    </>
  );
}
