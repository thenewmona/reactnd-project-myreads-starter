import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './books'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'

class SearchPage extends React.Component {

  state = {
    books:[],
    query: "",
    results:[]
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books=> {
      this.setState({books});
    })
  }

  updateQuery = (query) => {
    this.setState({query}, this.submitSearch);
  }
y
      this.setState({books: []})
    }
  
    else {
  
    console.log(query);
    let results = await BooksAPI.search(query);
      if (results.length) {
    this.setState({books: results});
      }
      else {
        this.setState({books: []})
      }
    }
};
  submitSearch() {
    if(this.state.query === '') {
      return this.setState({results: [] })
    }
    
    BooksAPI.search(this.state.query.trim()).then(results => {
      if(results.error) {
        return this.setState({results: [] })
      }
      //books displaying correct filter status 1:10 https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be
      else {
        results.forEach(book => {
          let fltr = this.state.books.filter(Book => Book.id === book.id)
            if(fltr[0]) { book.shelf = fltr[0].shelf }               
        });
      return this.setState({results: results })
      }
    })
  }

 
  //need to figure out how to do multiword search Danny suggest RegEX 

  render() {
    const {updateBookshelf}= this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.results.map((book,key)=> <Book updateBookshelf={updateBookshelf} book={book} key={book.id} shelf={book.shelf}/>)
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;