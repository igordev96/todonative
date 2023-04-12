import { Text, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.image}
        contentFit="cover"
        source={require("../../../assets/logo.png")}
      />
    </View>
  );
}
