

MyReads: A Book Lending App
====================================

# Application Setup SPECIFICATIONS

[x]Is the application easy to install and start?

[x]The application was created with create-react-app and requires only npm install and npm start to get it installed and launched.

[x]Does the application include README with clear installation and launch instructions?

[x]An updated README that describes the project and has instructions for installing and launching the project is included.



# Main Page SPECIFICATIONS

[x]Does the main page show three categories (or “bookshelves”) for books (currently reading, want to read, and read)?

[x]The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and author(s).

[x]Does the main page allow users to move books between shelves?

[x]The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.

[x]Does information persist between page refreshes?

[x]When the browser is refreshed, the same information is displayed on the page.


# Search Page SPECIFICATIONS

[x]Does the search page have a search input that lets users search for books?

[x]The search page has a search input field.

[] The search page behaves correctly:
a) As the user types into the search field, books that match the query are displayed on the page, along with their titles and author(s). You can use throttle/debounce but are not required to do so.
b) Search results are not shown when all of the text is deleted out of the search input box.
c) Invalid queries are handled and prior search results are not shown.
d) The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
e) TODO: The user is able to search for multiple words, such as “artificial intelligence.”

[]Do the search results allow a user to categorize a book as “currently reading”, “want to read”, or “read”?

[X]Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.

[X]If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.

[x]Do selections made on the search page show up on the main page?

[x]When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

#Routing SPECIFICATIONS

[X]Does the main page link to the search page?

[]The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.

[]Does the search page link back to the main page?

[]The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.


#Code Functionality SPECIFICATIONS

[]Does the project code handle state management appropriately?

[]Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly.

[]Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.

[]Does the code run without errors? Is the code free of warnings that resulted from not following the best practices listed in the documentation, such as using key for list items? Is the code formatted properly?

[]The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.

