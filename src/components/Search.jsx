import React, { Component } from 'react';
import ToDoList from "./ToDoList";

export class Search extends Component
{
    state =
        {
            value: ""
        };

    changeHandler = e =>
    {
        this.setState( { value: e.target.value } );
    };

    render ()
    {
        const v = this.state.value.toLowerCase();
        const todos = this.props.todos.filter( t => t.title.toLowerCase().includes( v ) );

        return (
            <div>
                <input
                    className="search"
                    onChange={ this.changeHandler } type="text"
                    placeholder="Search by title"
                />
                <ToDoList todos={ todos }
                    changeStatus={ this.props.changeStatus } />
            </div> );
    }
}

export default Search;
