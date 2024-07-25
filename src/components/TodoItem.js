import React, { useState } from 'react';

const TodoItem = ({ task, updateTask, deleteTask, toggleComplete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedDescription, setUpdatedDescription] = useState(task.description);

    const handleEdit = () => {
        if (isEditing && updatedDescription.trim() !== '') {
            updateTask(task.id, task.heading, updatedDescription);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className="todo-item">
            <h3 className={task.completed ? 'completed' : ''}>{task.heading}</h3>
            {isEditing ? (
                <textarea
                    value={updatedDescription}
                    onChange={(e) => setUpdatedDescription(e.target.value)}
                />
            ) : (
                <p className={task.completed ? 'completed' : ''}>{task.description}</p>
            )}
            <div className="actions">
                {!task.completed && (
                    <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
                )}
                <button onClick={() => toggleComplete(task.id)}>
                    {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </div>
    );
};

export default TodoItem;
