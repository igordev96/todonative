import { useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Keyboard,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Header from "../../components/Header";
import TasksStatus from "../../components/TasksStatus";
import NoTasks from "../../components/NoTasks";
import TaskCard from "../../components/TaskCard";
import { tasksPlaceHolder } from "../../utils/tasks";
import { styles } from "./styles";

export default function Home() {
  const [tasks, setTasks] = useState(tasksPlaceHolder);
  const [newTask, setNewTask] = useState("");

  const handleCreateTask = () => {
    if (newTask === "") {
      Keyboard.dismiss();
      return Alert.alert("No task", "Please insert a task before creating");
    }
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.ceil(Math.random() * 999 + 1),
        description: newTask,
        done: false,
      },
    ]);
    setNewTask("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={styles.newTask}>
          <TextInput
            value={newTask}
            onChangeText={setNewTask}
            onSubmitEditing={handleCreateTask}
            placeholder="Add a new task"
            placeholderTextColor="#808080"
            style={styles.input}
          />
          <TouchableOpacity onPress={handleCreateTask} style={styles.button}>
            <AntDesign name="pluscircleo" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <TasksStatus tasks={tasks} />
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          keyExtractor={(task) => task.id.toString()}
          data={tasks}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={!!tasks.length && { paddingBottom: 96 }}
          renderItem={({ item }) => (
            <TaskCard setTasks={setTasks} task={item} />
          )}
          ListEmptyComponent={<NoTasks />}
        />
      </View>
    </View>
  );
}
