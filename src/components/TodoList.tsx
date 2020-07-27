import React from 'react';
import './TodoList.css'

interface TodoListProps {
    items: { id: string, text: string }[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
    // const TodoList: React.FC<{items: { id: string, text: string }[]}> = ({items}) => { 
    const delTodo = (event: React.FormEvent, todoId: string) => {
        event.preventDefault();
        onDeleteTodo(todoId); 
    }

    return (
        <ul>
            {items.map(todo =>
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={event => delTodo(event, todo.id)}>Delete</button>
                </li>

            )}
        </ul>
    )
}

export default TodoList;
