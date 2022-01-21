const Todo = ({text, todo, todos, setTodos}) =>{

    const deleteHandler = () =>{
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () =>{
        setTodos(todos.map((item) =>{
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    };

    return(
        <div className="todo-list" >
            <li className={`todo-item ${todo.completed ? "completed-item" : ""}`} >{text}</li>
            
            <button className={`todo-check-btn btn ${todo.completed ? "completed" : ""}`} onClick={completeHandler} ><i class="fas fa-check fa-x"></i></button>

            <button className="todo-trash-btn btn" onClick={deleteHandler} ><i class="fas fa-trash fa-x"></i></button>
        </div>
    );
}



export default Todo;