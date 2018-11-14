<<<<<<< HEAD
import React from 'react';
import Book from './Book';

class Shelf extends React.Component {
   render() {
      return ( 
       <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.book.map((book, key) => <Book bookUpdater={this.props.bookUpdater}  book={book} key={key} />)
            }
          </ol>
        </div>
      </div>
      );
   }
} 

export default Shelf;
||||||| merged common ancestors
=======
import React from 'react';
import Book from './Book';

class Shelf extends React.Component {
   render() {
      return ( 
       <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.book.map((book, key) => <Book bookUpdater={this.props.bookUpdater}  book={book} key={key} />)
            }
          </ol>
        </div>
      </div>
      );
   }
} 

export default Shelf;
>>>>>>> dd98caf4795c85d2d2727cadf8e3abe6251945ef
