import {useDispatch, useSelector} from "react-redux";
import {loadTodos} from "./action";
import React, {useEffect} from "react";

function App() {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos())
    },[]);

    return(
        <div className={"main"}>
            Список дел : {loading ? "Идет загрузка дел" : (todos.map(todo => {
                return(
                    <div className={"content"}>
                        {todo.title}
                    </div>
                )
            }))}

        </div>
    )
}
export default App;
