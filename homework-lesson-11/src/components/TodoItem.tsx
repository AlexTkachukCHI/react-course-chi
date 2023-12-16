import {Component} from "react";
import {Item} from "./TodoApp";
import classes from "./TodoItem.module.css"

type TodoItemProps = {
    item: Item;
    onDone: (id: string) => void;
    onDelete: (id: string) => void;
}

class TodoItem extends Component<TodoItemProps, any> {
    constructor(props: TodoItemProps) {
        super(props);
    }

    componentDidMount() {
        console.log("New TodoItem added: " + this.props.item.text);
    }

    render() {
        return (
            <li>
                <input
                    id="isDone"
                    type="checkbox"
                    defaultChecked={this.props.item.isDone}
                    onChange={() => this.props.onDone(this.props.item.id)}
                />
                <span className={classes.itemText}>{this.props.item.text}</span>
                <button onClick={() => this.props.onDelete(this.props.item.id)}>Delete todo</button>
            </li>
        );
    }
}

export default TodoItem;
