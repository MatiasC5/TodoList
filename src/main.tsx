import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './App.tsx'
import { TodoProvider } from './context/todo.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoProvider>
    <TodoApp />
    </TodoProvider>
  </React.StrictMode>,
)
