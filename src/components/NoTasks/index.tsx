import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./styles";
import { base } from "../../styles/colors";

export default function NoTasks() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="clipboard-list" size={72} color={base["gray-400"]} />
      <View style={styles.texts}>
        <Text style={styles.text}>You don't have any tasks</Text>
        <Text style={styles.text}>
          Add tasks and arrange your tasks to do it
        </Text>
      </View>
    </View>
  );
}
