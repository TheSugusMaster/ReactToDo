export interface Todo {
    [key: string]: any
    id: number;
    description: string;
}

export const defaultTodo: Todo = {
    id: 0,
    description: "",
}