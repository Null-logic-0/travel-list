"use client";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import ItemList from "./components/ItemList/ItemList";
import { Task } from "./interface/task.interface";
import Empty from "./components/Empty/Empty";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedCount, setCount] = useState(0);

  const taskCreatedSuccessFully = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskToDelete: Task) => {
    const newTask = tasks.filter((item) => taskToDelete.id !== item.id);
    if (taskToDelete.completed) {
      setCount(completedCount - 1);
    }

    setTasks(newTask);
  };

  const onTaskCompleted = (completedTask: Task, completed: boolean) => {
    if (completed) {
      setCount(completedCount + 1);
    } else {
      setCount(completedCount - 1);
    }
    const newTasks = tasks.map((task) => {
      if (task.id === completedTask.id) {
        return {
          ...task,
          completed: completed,
        };
      }

      return task;
    });

    setTasks(newTasks);
  };

  return (
    <div className="flex items-center flex-col justify-center mx-[24px]">
      <Form onTaskCreated={taskCreatedSuccessFully} />
      {tasks.map((t) => (
        <ItemList
          task={t}
          key={t.id}
          onDelete={deleteTask}
          onTaskCompleted={onTaskCompleted}
        />
      ))}
      {tasks.length === 0 && <Empty />}
      <Footer total={tasks.length} completed={completedCount} />
    </div>
  );
}
