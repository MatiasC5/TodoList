import { useTodo } from "../hooks/useTodo"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
 const {todos} = useTodo()

    return (
        <ul className="todo-list mt-5 border-solid border-4  border-black  w-96 ">
           {
        todos.map(({description,id,done}) => (<TodoItem 
            todo={description} 
            key={id} 
            id={id} 
            done={done} 
   />
        ))}   
        </ul>
    )

}