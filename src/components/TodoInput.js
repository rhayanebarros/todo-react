const TodoInput = ({todo, setTodo, addTodo}) => {
    return (
        <div className='input-wrapper'>
            <p>texto qualquer</p>
            
            <label htmlFor="todo">
                <input 
                    type='text' 
                    name='todo'
                    value={todo} 
                    placeholder='Create a new todo'
                    onChange={(e) => {
                        setTodo(e.target.value);
                    }}
                />
            </label>
            <button className='add-button' onClick={addTodo}>
                Add
            </button>
        </div>
    );
};

export default TodoInput;