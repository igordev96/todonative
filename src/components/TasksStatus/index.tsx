import { Text, View } from "react-native";
import { styles } from "./styles";
import { ITask } from "../../utils/tasks";

export interface TasksStatusProps {
  tasks: ITask[];
}

export default function TasksStatus(props: TasksStatusProps) {
  const { tasks } = props;

  return (
    <View style={styles.tasksIndicators}>
      <View style={styles.container}>
        <Text style={styles.text}>Created</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeValue}>{tasks.length}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.textDone}>Done</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeValue}>
            {tasks.filter((task) => task.done === true).length}
          </Text>
        </View>
      </View>
    </View>
  );
}
