import React, { useRef } from 'react';
import './NewTodo.css';

type NewTodoProps = {
    onAddTodo: (text: string) => void
}
const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value; 
        props.onAddTodo(enteredText); 
        textInputRef.current!.value = '';
    }

    return (
        <form onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" ref={textInputRef} />
            </div>
            <button type="submit">ADD TODO</button>
        </form>)

}

export default NewTodo;