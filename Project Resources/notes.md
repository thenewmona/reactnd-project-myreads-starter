11/18/2018

[Roderick's walkthrough pt 1](https://drive.google.com/file/d/1Slzggq1ABg4owc9uX27Mly-xKKHoABB7/view)

11/21/2018

following along with  this walk through 
[MyReads React App - part 1](https://www.youtube.com/watch?v=pdoFamR3LSI) - **kenjournal
working on breaking down my components 
got through section 1 and 2 of udactiy starting the project along with finishing up section 3 REACT portion 

11/26/2018

created AppNotes.js - so that I can make the components from the file, but keep the app.js in tacked
keep losing my placed 
//Following Roderick's walkthrough https://www.youtube.com/watch?v=5J6fs_BlVC0
Got through 3 lessons from Tyler, created a node server , and getting a better understanding of webpack 

[All Supported HTML Attributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)

[Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
 
 Setup my components finally now I am getting this error message 

 `./src/App.js
Module not found: Can't resolve 'react-router-dom' in 'C:\Users\thene\Google Drive\GWG phase 2\GWGprojects\reactnd-project-myreads-starter\src'
This error occurred during the build time and cannot be dismissed.`

[react-router-dom](https://www.npmjs.com/package/react-router-dom)

got rid of the router error now need to fix this error 

./src/App.js
Module not found: `C:\Users\thene\Google Drive\GWG phase 2\GWGprojects\reactnd-project-myreads-starter\src\components\MainPage.js` does not match the corresponding path on disk `mainpage.js`.
This error occurred during the build time and cannot be dismissed.

Changed the camel casing for all the components, and now I am getting this error message 

./src/components/MainPage.js
104:36-45 "export 'default' (imported as 'BookShelf') was not found in './BookShelf'

[Javascript ES6, export const vs export default](https://stackoverflow.com/questions/33611812/javascript-es6-export-const-vs-export-default)



##Student Hub

Hello everyone I am getting the following error message ./src/components/MainPage.js 104:36-45 "export 'default' (imported as 'BookShelf') was not found in './BookShelf' Doing a google search, has left me even more confused on this error

https://stackoverflow.com/questions/33611812/javascript-es6-export-const-vs-export-default

https://hackernoon.com/import-export-default-require-commandjs-javascript-nodejs-es6-vs-cheatsheet-different-tutorial-example-5a321738b50f

Not sure how to fix this, need to see my shelf , and I can't , any help is greatly appreaciated

https://github.com/thenewmona/reactnd-project-myreads-starter

##Slack

I am getting this error message
`./src/App.js
Module not found: `C:\Users\thene\Google Drive\GWG phase 2\GWGprojects\reactnd-project-myreads-starter\src\components\MainPage.js` does not match the corresponding path on disk `mainpage.js`.`

Changed the camel casing for all the components, and now I am getting this error message

`./src/components/MainPage.js
104:36-45 "export 'default' (imported as 'BookShelf') was not found in './BookShelf'`

Found this on stack overflow, but I am not understanding it completely,  can anyone help Please
Thanks
https://github.com/thenewmona/reactnd-project-myreads-starter
GitHub
thenewmona/reactnd-project-myreads-starter
Starter Code for the React MyReads Project. Contribute to thenewmona/reactnd-project-myreads-starter development by creating an account on GitHub.
 


Sara Krum [10 minutes ago]
If you change the name of your file like mainpage.js you have to go back and update all of your imports.... so on this page https://github.com/thenewmona/reactnd-project-myreads-starter/blob/master/src/App.js line 6 and 7 should be  
 ```import MainPage from './components/mainpage';
import SearchPage from './components/searchpage';``` 
they need to be lowercase because that's what you named the files. The from './blah/blah' is the path to your files (edited)


Lestec [FEND] [9 minutes ago]
Also im seeing that BookShelf is Not exported. (edited)


Sara Krum [5 minutes ago]
I would suggest changing the name of your files back to camelCase so you don't have to update all of your pages. and then make sure BookShelf and all other components have the export and the same name.

thenewmona {FEND}Michigan [1 minute ago]
@Sara Krum I did have all my components lower case, and that is what I had noticed in the error message. That is why I switched it over to CamelCase
Double checking all of my CamelCases now
Thanks

LOL, is this how this project is going to be til the end, you fix one thing and get another problem

Time to hit Google again :slightly_smiling_face:

`×
←→1 of 3 errors on the page
You should not use <Route> or withRouter() outside a <Router>
▶ 33 stack frames were collapsed.`

Sara Krum [3 hours ago]
the Udacity lessons have a good explanation of how to use <Route> they explain it for the contacts project.

Crystal [1 hour ago]
For the books without an author, you need to have a fallback. I did a "No Image" image. It wont pass without that. They dont seem to require a no author fallback though.

thenewmona {FEND}Michigan [3 hours ago]
@drunkenkismet [FEND] Project Coach Hello
thanks so much for helping working on MyReads right now
Want to submit tonight, so for the SW is it better to just create the files myself or someone was telling me that there is a built in one
I am not seeing SW as part of the Rubric so is it even required


drunkenkismet [FEND] Project Coach [2 hours ago]
No, it's not required, at least as far as I can find. @thenewmona {FEND}Michigan The focus of the app is on implementing React principles :slightly_smiling_face:. If one uses the starter code, they're not included. If one goes the other way and uses `create-react-app` from scratch, though, SWs are a possibility if one chooses to include them (but they're not necessary for P6).
completed the router section, implemented my browser router 

books move, I can search everything seems to be working fine 


TODO: So that I can finish

[] can't do multiple word search
regex needed to make this a controlled component 

[] Images for blank books
[] No author's 
[] Service worker 
[] multiple Linux books in the search 

[How to customize service workers with create-react-app](https://medium.freecodecamp.org/how-to-customize-service-workers-with-create-react-app-4424dda6210c)

[How to build a PWA with Create-React-App and custom service workers](https://medium.freecodecamp.org/how-to-build-a-pwa-with-create-react-app-and-custom-service-workers-376bd1fdc6d3)

11/27/2018

Still need to fix my search, studying Regex 
went through Rodrick's tutorial 
Did Udacity's state management lessons
installed Regex and sortby 

11/28/2018