import React from 'react'

class Book extends React.Component {

  render() {//help from Julian's notes
    const imageBookDisplay = this.props.book.imageLinks
    ? this.props.book.imageLinks.thumbnail
    : 'http://via.placeholder.com/128x193/0000011/fffff?text=No+BookCover';
    
      
    return (
      <div className  ="book">
        <div className ="book-top">{
          }
          <div className ="book-cover" style={{ width: 128, height: 193, 
            backgroundImage:  `url("${imageBookDisplay }")` }}></div>
          
          <div className ="book-shelf-changer">
            <select value = {this.props.book.shelf || "none"} onChange={(e) => (this.props.updateBookshelf(this.props.book, e.target.value))}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        {/* NO AUTHORS RYAN'S VIDEO STARTS @ 35:00 https://www.youtube.com/watch?v=acJHkd6K5kI */}
        <div className="book-authors">{this.props.book.authors || "Author unknown "}</div>
      </div>
    );
  }
}

export default Book;