import {Component, createRef} from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoApp.module.css"

export type Item = {
    id: string;
    text: string;
    isDone: boolean;
}

type TodoState = {
    items: Item[];
    filter: string;
}

class TodoApp extends Component<any, TodoState> {
    private inputRef;

    constructor(props: any) {
        super(props);
        this.inputRef = createRef<HTMLInputElement>();
        this.state = {
            items: [],
            filter: "All"
        }
    }

    handleAddTodo() {
        this.setState((prevState) => {
            const newItem: Item = {
                id: new Date().toISOString(),
                text: String(this.inputRef.current?.value),
                isDone: false
            }

            return {
                items: [...prevState.items, newItem],
                filter: prevState.filter
            };
        });
    }

    handleDone(id: string) {
        this.setState(prevState => {
            const itemIndex = prevState.items.findIndex(item => item.id === id);
            const updatedItems = [...prevState.items];
            updatedItems[itemIndex].isDone = !updatedItems[itemIndex].isDone;

            console.log(updatedItems[itemIndex]);

            return {
                items: updatedItems,
                filter: prevState.filter
            }
        });
    }

    handleDelete(id: string) {
        this.setState(prevState => {
            return {
                items: prevState.items.filter(item => item.id !== id),
                filter: prevState.filter
            }
        });
    }

    handleItemFilterChange(newFilter: string) {
        if (newFilter && this.state.filter !== newFilter)
        this.setState(prevState => {
            return {
                items: prevState.items,
                filter: newFilter
            };
        })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<TodoState>, snapshot?: any) {
        if (prevState.items.length !== this.state.items.length) {
            console.log("Todo list items is updated!");
        } else if (prevState.filter !== this.state.filter) {
            console.log("Todo Filter is changed");
        }
    }

    render() {
        let items = this.state.items;

        if (this.state.filter === "NotDone") {
            items = this.state.items.filter(item => !item.isDone);
        } else if (this.state.filter === "Done") {
            items = this.state.items.filter(item => item.isDone);
        }

        return (
            <div>
                <h1>TodoApp Component</h1>
                <div>
                    <label htmlFor="todo">Next todo</label>
                    <input ref={this.inputRef} name="todo" type="text" className={classes.todoInput}/>
                    <button onClick={this.handleAddTodo.bind(this)}>Add Todo</button>
                </div>
                <div className={classes.filters}>
                    <button onClick={() => this.handleItemFilterChange("All")}>All</button>
                    <button onClick={() => this.handleItemFilterChange("NotDone")}>Not Done</button>
                    <button onClick={() => this.handleItemFilterChange("Done")}>Done</button>
                </div>
                <div>
                    {this.state.filter && items && (
                        <ul className={classes.todoList}>
                            {items.map(item =>
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    onDone={this.handleDone.bind(this)}
                                    onDelete={this.handleDelete.bind(this)}
                                />
                            )}
                        </ul>
                    )}
                </div>
            </div>
        );
    }
}

export default TodoApp;
