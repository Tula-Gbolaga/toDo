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
            <>
                <div className="search">
                    <input
                        onChange={ this.changeHandler } type="text"
                        placeholder="Search by title"
                    />
                </div>
                <ToDoList todos={ todos }
                    changeStatus={ this.props.changeStatus } />
            </>
        );
    }
}

export default Search;
