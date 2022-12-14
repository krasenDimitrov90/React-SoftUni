import TodoListItem from './TodoListItem';
import { useState } from 'react';


export default function TodoList() {

    let [count, setCount] = useState(0);
    let [names, setName] = useState(['Krasen', 'Doch', 'Miro']);

    let name = names[count];

    const increment = (e) => {
        setCount(count => count + 1)
    }

    const decrement = (e) => {
        setCount(count => count - 1)
    }
    

    return (
        <>
            <h1>Todo List</h1>

            <ul>
                <TodoListItem>Learn React Yeah</TodoListItem >
                <TodoListItem>Learn JS</TodoListItem >
                <TodoListItem>Learn HTML</TodoListItem >
                <TodoListItem>Learn CSS</TodoListItem >
            </ul>
            <p>{name}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );
}