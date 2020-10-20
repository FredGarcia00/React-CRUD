import React, { useState } from 'react'
import { db } from './firebase'
import './Todo.css'

function Todo({todo}) {
    const [ open, setOpen ] = useState(false);
    const [ input, setInput ] = useState('')

    const handleOpen = () => {
        setOpen(true);
    }

    const updateTodo = () => {
        db.collection('todos').doc(todo.id).set({
            todo: input
        }, { merge: true})
        setOpen(false);
    }

    return (
        <div className="todo">
            <li>{todo.todo}</li>
            <input placeholder={todo.todo} value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={updateTodo}>Update Todo</button>
            <button onClick={e => db.collection('todos')
        .doc(todo.id).delete()}>Delete Me</button>
        </div>
    )
}

export default Todo
