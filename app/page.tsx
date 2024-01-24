"use client";
import React, { useState, useEffect } from "react";
import "./page.css";
import { db } from "../firebase";
import { collection, getDocs, addDoc, updateDoc } from "firebase/firestore";
import Task from "../components/task";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<any[]>([]);

  const fetchTodos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "todos"));

      const newTasks: any = [];
      querySnapshot.forEach((doc) => {
        newTasks.push(doc.data());
      });
      console.log(newTasks);
      setTodos(newTasks);
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleComplete = async () => {
    console.log("todo");
  };

  const handleFormSubmit = async () => {
    event?.preventDefault();
    console.log(task);
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: task,
        Completed: false,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setTask("");
    fetchTodos();
  };

  return (
    <div className="container">
      <h1>To-Do App</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Enter a task"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></input>
      </form>
      <div className="todo-parent">
        <div className="todo">
          {todos.map((todo) => (
            <Task
              key={todo.id}
              task={todo.todo}
              completed={todo.Completed}
              complete={handleComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Todo;
