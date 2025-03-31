import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    //stores current text for list
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    //adds new text item to the list
    function handleSubmit() {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue.trim()]);
            setInputValue('');
        }
    }

    //removes selected items from the list
    function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !==index));
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;