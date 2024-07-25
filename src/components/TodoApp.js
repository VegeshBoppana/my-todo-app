import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import './TodoApp.css';

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [taskHeading, setTaskHeading] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    const addTask = () => {
        if (taskHeading.trim() === '' || taskDescription.trim() === '') return;
        const newTask = {
            id: Date.now(),
            heading: taskHeading,
            description: taskDescription,
            completed: false
        };
        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
        setTaskHeading('');
        setTaskDescription('');
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const updateTask = (id, updatedHeading, updatedDescription) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, heading: updatedHeading, description: updatedDescription } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const deleteTask = (id) => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    };

    const toggleComplete = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <div className="todo-app">
            <h1>To-Do List</h1>
            <div className="task-input">
                <input
                    type="text"
                    value={taskHeading}
                    onChange={(e) => setTaskHeading(e.target.value)}
                    placeholder="Enter task heading"
                />
                <textarea
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    placeholder="Enter task description"
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <TodoList
                tasks={tasks}
                updateTask={updateTask}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
            />
        </div>
    );
};

export default TodoApp;
