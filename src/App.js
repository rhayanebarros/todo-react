import { useState } from 'react';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState("");
  return (
    <div className='App'>
      <h1>React Todo App</h1>

      <div>
        <input 
          type='text' 
          name='todo'
          value={todo} 
          placeholder='Criando um novo todo'
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          />
        <button className='add-button'>
          Add
        </button>
      </div>
    </div>
  );
};

export default App;
