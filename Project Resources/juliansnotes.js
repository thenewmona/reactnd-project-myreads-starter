import noImage from '../icons/no-image.gif'

...
...
...
<div 
    className="book-cover" 
    style={{
        backgroundImage: book.imageLinks && book.imageLinks.thumbnail ? `url(${book.imageLinks.thumbnail})` : `url(${noImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ffffff',
        width: '158px',
        height: '181px'
    }} 
/>
...
...
...

<div className="book-title">
	{book.title || ""}
</div>

<div className="book-authors">
    {(book.authors && book.authors.join(", ")) || ""}
</div>