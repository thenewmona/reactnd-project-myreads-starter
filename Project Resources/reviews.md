Requires Changes
3 SPECIFICATIONS REQUIRE CHANGES
This is a great submission! :clap: :clap:
However, some changes are required to make it perfect.

Keep learning :udacious: and All the best! :smiley:
Application Setup
The application was created with create-react-app and requires only npm install and npm start to get it installed and launched.

The application installs and launches with npm install and npm start without any issues. :thumbsup:

An updated README that describes the project and has instructions for installing and launching the project is included.

Currently, in the README, npm is written in upper case.
The npm install and npm start commands are case sensitive. NPM install and NPM start will shown the following error-

Screenshot from 2018-11-29 19-04-59.png

Screenshot from 2018-11-29 19-03-08.png

Main Page
The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and author(s).

The main page is completely functional and shows 3 shelves for books with each book shown on the correct shelf. :clap: :clap:

The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.

The drop-down menu works perfectly allowing the user to move books between shelves. :clap:

When the browser is refreshed, the same information is displayed on the page.

Same information is displayed on the page when the browser is refreshed.

Search Page
1) The search page has a search input field.

2) The search page behaves correctly:
a) As the user types into the search field, books that match the query are displayed on the page, along with their titles and author(s). You can use throttle/debounce but are not required to do so.
b) Search results are not shown when all of the text is deleted out of the search input box.
c) Invalid queries are handled and prior search results are not shown.
d) The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
e) The user is able to search for multiple words, such as “artificial intelligence.”

The user is unable to search for multiple words (example- "artificial intelligence"). The whitespace character from the end of the query is removed as soon as it is entered.
See code review for more details.
Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.

If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.

When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

An item categorized on the search page appears on that shelf in the main page when the user navigates to the main page - Correct

Routing
The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.

Main page has a link to the search page - Correct
When the link is clicked, the URL in the browser's address bar is /search - Correct
The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.

Search page has a link to the main page - Correct
When the link is clicked, the URL in the browser's address bar is / - Correct
Code Functionality
Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly.

Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.

Component state is correctly passed down from parent to child components - Correct
State variable is not directly modified - Correct
Books have the same state in the main page and the search page - Correct
The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.

The following error is shown when the app starts-

Screenshot from 2018-11-29 18-38-00.png

See code review for more details.
thenewmona {FEND}Michigan [5 minutes ago]
@Madison Estabrook [FEND Grad] going to my repo to check my commit history and see why or if `await` is suppose to be there
But your right it does not look right
Thanks


thenewmona {FEND}Michigan [< 1 minute ago]
this was recommended to me, because I was having some promise issues
But I got a thumbs up from the reviewer on that one
https://snag.gy/EDzvFh.jpg (203 kB)


thenewmona {FEND}Michigan [< 1 minute ago]
Here's the article that was sent to me
https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
Hacker Noon
6 Reasons Why JavaScript’s Async/Await Blows Promises Away (Tutorial)
In case you missed it, Node now supports async/await out of the box since version 7.6. If you haven’t tried it yet, here are a bunch of…
Reading time
----------------
6 min read

(40 kB)
Mar 25th, 2017 at 12:55 PM


thenewmona {FEND}Michigan [< 1 minute ago]
checking on the next item :slightly_smiling_face: