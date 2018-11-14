<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Shelf from '../Shelf';

class Mainpage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         books: []
      }
   }

   componentDidMount() {
      BooksAPI.getAll()
      .then(resp => {
         this.setState({books:resp});
      })
   }

   bookUpdater = (book, shelf) => {
      BooksAPI.update(book, shelf)
      .then(resp => {
         book.shelf = shelf;
         this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat(book)
         }))
      })
    }

   render() {
      return (
         <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf bookUpdater={this.bookUpdater} name="Current Reads" book={this.state.books.filter(b => b.shelf === "currentlyReading")} />
                <Shelf bookUpdater={this.bookUpdater} name="Want To Read" book={this.state.books.filter(b => b.shelf === "wantToRead")} />
                <Shelf bookUpdater={this.bookUpdater} name="Read" book={this.state.books.filter(b => b.shelf === "read")} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
      );
   }
}

export default Mainpage;
||||||| merged common ancestors
=======
import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Shelf from '../Shelf';

class Mainpage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         books: []
      }
   }

   componentDidMount() {
      BooksAPI.getAll()
      .then(resp => {
         this.setState({books:resp});
      })
   }

   bookUpdater = (book, shelf) => {
      BooksAPI.update(book, shelf)
      .then(resp => {
         book.shelf = shelf;
         this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat(book)
         }))
      })
    }

   render() {
      return (
         <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf bookUpdater={this.bookUpdater} name="Current Reads" book={this.state.books.filter(b => b.shelf === "currentlyReading")} />
                <Shelf bookUpdater={this.bookUpdater} name="Want To Read" book={this.state.books.filter(b => b.shelf === "wantToRead")} />
                <Shelf bookUpdater={this.bookUpdater} name="Read" book={this.state.books.filter(b => b.shelf === "read")} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
      );
   }
}

export default Mainpage;
>>>>>>> dd98caf4795c85d2d2727cadf8e3abe6251945ef
