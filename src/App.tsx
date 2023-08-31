import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/TodoList"

function TodoApp() {

  return (
    <main className="flex flex-col  items-center h-screen">
      <h1 className="text-3xl font-bold underline text-center">todoList</h1>
      <AddTodo />
      <TodoList />
    </main>
  )
}

export default TodoApp
