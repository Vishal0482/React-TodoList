const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>

            <div className="form-container">

                <input value={inputText} type="text" onChange={inputTextHandler} className="input-text" />
                <button onClick={submitTodoHandler} type="submit" className="btn-add btn" >
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>

            <div>
                <select className="selection-menu" onChange={statusHandler} name="todos" >

                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>

        </form>
    );
}

export default Form;