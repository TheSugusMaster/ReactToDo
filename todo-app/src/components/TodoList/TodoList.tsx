import * as React from "react";
import { Todo } from "../../types/Todo";

interface IProps {
    todos: Todo[];
    handleDelete: (e: any, id: number) => void;
}

const TodoList: React.FC<IProps> = (props: IProps) => {

    // const listItems = props.todos.map((item) =>
    //     <div>
    //         <button onClick={(e: any) => props.handleDelete(e, item.id)}>Löschen</button>
    //         <span>{item.description}</span>
    //     </div>
    // )

    const renderTodos = () => {
        return (
            <>
                {React.Children.toArray(props.todos.map((item) => (
                    <div>
                        <button onClick={(e: any) => props.handleDelete(e, item.id)}>Löschen</button>
                        <span>{item.description}</span>
                    </div>
                )))}
            </>
        )
    }

    return (
        <>
            {/* {listItems} */}
            {renderTodos()}
        </>
    );
}

export default TodoList;