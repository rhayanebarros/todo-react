import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>React Todo App</h1>

      <div>
        <input type='text' name='todo' placeholder='Criando um novo todo'/>
        <button className='add-button'>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
