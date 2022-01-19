import * as React from "react";

interface IProps {
    description: string;
    handleValueChange: (e: any) => void;
    handleAddTodo: (e: any) => void;
}

const AddItem: React.FC<IProps> = (props: IProps) => {

    return (
        <>
            <div className="addItem">
                Neues Todo:
                <input type="text" name="description" value={props.description} onChange={props.handleValueChange}/>
                <button onClick={props.handleAddTodo}>Hinzufügen</button>
            </div>
        </>
    );
}

export default AddItem;