const Todos = (props) => {
    console.log("todo - child component render", props)
    return(
        <>
            <h2>My Todos</h2>
            {props.todos.map((todo, idx)=>{
                return <p key={idx}>{todo}</p>
            })}
        </>
    )
}

export default Todos;