import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos}) =>{
    return(
        <div className="todo-box">
            <ul>
                {filteredTodos.map(todo => (
                    <Todo setTodos={setTodos} todos={todos} todo={todo} key={todo.id} text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;