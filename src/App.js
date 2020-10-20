import React, { useState, useEffect } from 'react';
import Todo from './Todo'
import { db } from './firebase'
import firebase from 'firebase'
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');
  // console.log(input);

  //when app loads , we need to listen to db to fetch new todos
  // as they get added/removed

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  },[])

const addTodo = (e) => {
  e.preventDefault();

db.collection('todos').add({
  todo: input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
})

  // setTodos([...todos, input]) locally
  setInput('');
}


  return (
    <div className="app">
      <h1>Hello</h1>
      <form>
      <input value={input} onChange={e => setInput(e.target.value)}type="text"/>
      <button disabled={!input.trim()}type="submit" onClick={addTodo}>Add todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo
          todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
