import { useTodo } from "../hooks/useTodo";

interface Props {
    todo: string;
    id: number
    done: boolean
}

export const TodoItem = ({ todo, id,done }: Props) => {
    const { deleteTodo, toggleTodo } = useTodo()
    return (
        <li className={`todo-item p-2 flex justify-between ${(done)? 'done' : ''}`}>{todo}
            <div>
                <button className="delete-todo" onClick={() => deleteTodo(id)}>
                    ❌
                </button>
                <button className="toggle-todo" onClick={() => toggleTodo(id)}>
                    ✔️
                </button>
            </div>
        </li>
    )
}