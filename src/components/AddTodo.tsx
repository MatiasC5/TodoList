import { Todo } from "../helpers/Todo"
import { useForm } from "../hooks/useForm"
import { useTodo } from "../hooks/useTodo"

export const AddTodo = () => {
    
const{setTodos,todos}=useTodo()

 const {handleInputChange, description}= useForm({
    description :""
 })

 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(todos.length >= 10 ) return
    const newTodo: Todo = {
        description,
        id: new Date().getTime(),
        done: false,
    }
    
    setTodos((prevTodos) => [...prevTodos, newTodo]);
}
 
    return (
        <section className="add-todo-section flex flex-col  w-full  items-center 
        mt-5 ">
            <form onSubmit={handleSubmit} className="flex flex-col text-center">
            <input 
            type="text" 
            onChange={handleInputChange} 
            name="description" 
            value={description} 
            className="border-solid border-2 w-64 mt-1 p-1"    
            placeholder="Add a new todo"
            autoComplete="off"
            />
            <button 
            type="submit" 
            className="btn-add-todo bg-blue-600 font-medium text-white mt-2 ">Add</button>
            </form>
             
        </section>
    )
}