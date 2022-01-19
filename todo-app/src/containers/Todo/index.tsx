import * as React from "react";
import { useState } from "react";
import AddItem from "../../components/AddItem/AddItem";
import TodoList from "../../components/TodoList/TodoList";
import { defaultTodo, Todo } from "../../types/Todo";

const TodoContainer: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>(
        [
            { id: 0, description: 'Write React application', dueDate: new Date() },
            { id: 1, description: 'Present react app to teamlead', dueDate: new Date() },
            { id: 2, description: 'Probar los conocimientos de español del señor Oberhänsli', dueDate: new Date() }
        ]
    );
    const [newTodo, setNewTodo] = useState({ ...defaultTodo });

    const deleteTodoById = (id: number) => {
        var todosCpy = [...todos];
        const index = todosCpy.findIndex(t => t.id === id);

        if (index >= 0) {
            todosCpy.splice(index, 1);
        }

        setTodos(todosCpy);
    }

    const createTodo = (todo: Todo) => {
        var newId = 0;
        var todosCpy = [...todos];

        if (todosCpy.length) {
            newId = Math.max(...todosCpy.map(t => t.id)) + 1;
        }

        todosCpy.push({ id: newId, description: todo.description});

        setTodos(todosCpy);
    }

    const handleValueChange = (e: any) => {
        var newModifiedTodo = { ...newTodo };

        newModifiedTodo[e.currentTarget.name] = e.currentTarget.value;

        setNewTodo(newModifiedTodo);
    }

    const handleAddTodo = (e: any) => {
        createTodo(newTodo);
    }

    const handleDelete = (e: any, id: number) => {
        deleteTodoById(id);
    }

    return (
        <>
            <h2>Todos</h2>
            <AddItem 
                description={newTodo.description}
                handleValueChange={handleValueChange}
                handleAddTodo={handleAddTodo}
            />
            <TodoList
                todos={todos}
                handleDelete={handleDelete}
            />
        </>
    )
}

export default TodoContainer;