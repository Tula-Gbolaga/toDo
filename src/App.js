import React, { Component } from 'react';
import { ToDoForm, Search, ToDoList, Filter } from "./components";

export class App extends Component
{
  state =
    {
      isAdding: false,
      isFiltering: false,
      isSearching: false,
      toDos: [
        {
          id: 1611315730838,
          title: "hello",
          complete: true,
          createdAt: 1615669300398
        },
        {
          id: 1611315330444,
          title: "hyg",
          complete: false,
          createdAt: 1611315330444
        },

        {
          id: 1611315330838,
          title: "hello jhh",
          complete: true,
          createdAt: 1605181090000
        }
        ,

        {
          id: 1611315330898,
          title: "hjgyg",
          complete: false,
          createdAt: 1599910690000
        }
      ]

    };

  changeStatus = ( id, status ) =>
  {
    const toDos = [ ...this.state.toDos ];
    const todoIndex = toDos.findIndex( t => t.id === id );
    toDos[ todoIndex ] = { ...toDos[ todoIndex ], complete: status };
    this.setState( { toDos } );
  };

  addToDo = ( title ) =>
  {
    const toDo =
    {
      title,
      complete: false,
      createdAt: new Date().getTime(),
      id: new Date().getTime()
    };

    const toDos = [ toDo, ...this.state.toDos ];

    this.setState( { toDos } );
  };


  deleteToDo = ( id ) =>
  {

  };

  toggleRender = ( filter ) =>
  {
    this.setState( { [ filter ]: !this.state[ filter ] } );
  };

  render ()
  {
    const { isFiltering, toDos, isAdding, isSearching } = this.state;
    let comp;
    switch ( true ) 
    {
      case isFiltering:
        comp = <Filter changeStatus={ this.changeStatus } todos={ toDos } />;
        break;

      case isSearching:
        comp = <Search changeStatus={ this.changeStatus } todos={ toDos } />;
        break;

      default:
        comp = <ToDoList changeStatus={ this.changeStatus } todos={ toDos } />;
        break;
    }

    return (
      <main className="main">
        <section className="header">
          <h2>ToDo App</h2>
          <button
            onClick={ () => this.toggleRender( "isFiltering" ) }>
            { isFiltering ? "Clear Filters" : "Filters" }
          </button>
        </section>
        {comp }

        {
          isAdding ?
            <ToDoForm
              toggle={ this.toggleRender }
              addToDo={ this.addToDo } />
            : null
        }

        <section className="footer">

          <button onClick={ () => this.toggleRender( "isSearching" ) }>
            {
              isSearching ? "Close search" : "Search"
            }
          </button>

          <button onClick={ () => this.toggleRender( "isAdding" ) }>Add new item</button>

        </section>
      </main>
    );
  }
}

export default App;
