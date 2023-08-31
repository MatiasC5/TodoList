import React, { createContext, useState, ReactNode } from "react";
import { Todo } from "../helpers/Todo";

interface TodoContextType  {
  todos: Todo[];
  setTodos:   React.Dispatch<React.SetStateAction<Todo[]>>;
  deleteTodo: (id: number) => void;
  toggleTodo: (id:number) => void;
}

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);
const data = JSON.parse(localStorage.getItem('todos') || '[]')

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(data);

  localStorage.setItem('todos', JSON.stringify(todos))

  const deleteTodo = (id: number):void => {
     setTodos(todos.filter(item => item.id !== id))
  }

  const toggleTodo = (id: number) => {
     setTodos(todos.map(item =>  {
      if(item.id === id){
        item.done = !item.done
      }
        return item;
      }
      ))
  }

  return (
    <TodoContext.Provider value={{todos,setTodos,deleteTodo, toggleTodo}}>
      {children}
    </TodoContext.Provider>
  )
}