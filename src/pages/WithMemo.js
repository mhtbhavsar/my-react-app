import { useState } from 'react';
import TodosMemo from './components/TodoMemo';

function WithMemo() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"])
    const increment = () => {
        setCount((c) => c+1);
    }

    return (
        <>
            <TodosMemo todos={todos}/>
            <hr/>
            <div>
                Count : {count}
                <button onClick={increment}>+</button>
            </div>
        </>
        
    )
}

export default WithMemo;
