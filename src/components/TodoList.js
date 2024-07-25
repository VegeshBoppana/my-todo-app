import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, updateTask, deleteTask, toggleComplete }) => {
    return (
        <div className="todo-list">
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                    toggleComplete={toggleComplete}
                />
            ))}
        </div>
    );
};

export default TodoList;
