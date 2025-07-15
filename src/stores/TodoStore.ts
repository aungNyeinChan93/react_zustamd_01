import { create } from "zustand";


export interface Todo {
    id: number,
    task: string,
    completed: boolean
};

interface TodoStore {
    todos: Todo[],
    setTodo: (todos: Todo) => void,
    removeTodo: (id: number) => void,
    toggleStatus: (id: number) => void,
};

const useTodoStore = create<TodoStore>((set) => {
    return {
        todos: [],
        setTodo: (newTodo) => set((state) => {
            return { todos: [...state.todos, newTodo] }
        }),
        removeTodo: (id) => set(state => {
            return { todos: state.todos.filter(todo => todo.id !== id) }
        }),
        toggleStatus: (id: number) => set((state) => {
            return {
                todos: state.todos.map(t => t.id == id ? ({ ...t, completed: !t.completed }) : t)
            }
        })

    }
});

export default useTodoStore;