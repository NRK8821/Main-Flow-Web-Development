import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className="Todo">
            <p 
                onClick={() => toggleComplete(task.id)} 
                className={task.completed ? "completed" : "incompleted"}
            >
                {task.task}
            </p>
            <div>
                <FaEdit onClick={() => editTodo(task.id)} className="edit-icon" />
                <FaTrash onClick={() => deleteTodo(task.id)} className="delete-icon" />
            </div>
        </div>
    );
};
