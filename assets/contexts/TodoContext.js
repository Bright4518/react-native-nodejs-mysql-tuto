
import React, { Component, createContext,setState } from 'react'

export const TodoContext = createContext();

class TodoContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { task: 'do smething' },
                { task: 'do smething' },
                { task: 'do smething' },
                { task: 'do smething' },
                { task: 'do smething' },
                { task: 'do smething' },
            ],
        }
    }
    //create
    createTodo(event, todo) {
        event.preventDefault();
        let data = [...this.state.todos];
        data.push(todo);
        this.setState( 
            { todos: data, }
        );
    }



    //read
    readTodo() {
        
    }



    //update
    updateTodo() {
        
    }



    //delete
    deleteTodo() {
        
    }
     




    render() {
        return (
            <TodoContext.Provider value={{
                ...this.state,
                createTodo: this.createTodo.bind(this),
                updateTodo: this.updateTodo.bind(this),
                deleteTodo:this.deleteTodo.bind(this),
                


            }}>
                {this.props.children}

            </TodoContext.Provider>
        )
    }
}

export default TodoContextProvider;
