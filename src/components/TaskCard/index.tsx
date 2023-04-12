import {
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { ITask } from "../../utils/tasks";
import { styles } from "./styles";
import { base } from "../../styles/colors";
import { Dispatch, SetStateAction } from "react";

export interface TaskCardProps {
  task: ITask;
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}

export default function TaskCard(props: TaskCardProps) {
  const { task, setTasks } = props;

  const handleRemoveTask = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((prevTask) => prevTask.id !== task.id)
    );
  };

  const handleCheckTask = () => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) => {
        if (prevTask.id === task.id) {
          return {
            ...prevTask,
            done: !prevTask.done,
          };
        }
        return prevTask;
      })
    );
  };

  return (
    <TouchableWithoutFeedback onPress={handleCheckTask}>
      <View style={styles.card}>
        {task.done ? (
          <View style={styles.check}>
            <Feather name="check" size={16} color="white" />
          </View>
        ) : (
          <View style={styles.uncheck}></View>
        )}
        <Text style={task.done ? styles.descriptionDone : styles.description}>
          {task.description}
        </Text>
        <TouchableOpacity onPress={handleRemoveTask}>
          <Feather name="trash-2" size={20} color={base["gray-300"]} />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
