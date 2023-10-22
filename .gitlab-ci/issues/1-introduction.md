# React practice

Now it's time for your last assignment. This is your final project. This assignment will be bigger than the previous ones. You will need to create a web app based on the Star Wars films.

## Objective

Create a website using based on the Star Wars films that include a header with a logo and a menu, a dropdown menu for sorting, and a list of films with detailed descriptions accessible by clicking on the film name.

## Requirements

Create a React application using modern development practices and tools. The application should use Redux for state management and React Router for routing.

Use the **[Figma layout](https://gitlab.nixdev.co/js/edu/asgmt/react/react-practice/-/tree/develop/public)**,
which is located in the public folder.

The site must have a header, body and footer. Below will be described a short description of the pages, For a more detailed understanding, use the Figma layout on which we can see the exact dimensions or arrangement of elements.

In order not to complicate this project too much, you don't need to use TypeScript

To start the main application use the command `yarn run dev`

The data for the display you get from the [Json-Server](https://github.com/typicode/json-server). To run it you have to run the command `yarn run devServer`

`.../characters/{id}` - To get people data
`.../films/{id}` - To get films data

### Common view

The general view of the site should have a header with a logo on the left, a navigation menu on the right, your information with episodes or characters will be displayed below, and at the very bottom there should be a footer

### The _Episode page_ must have realized like this

_**Sorting:**_

* Implement a dropdown menu for sorting options by _release date_, _episode number_, and _episode name_.
* Ensure the sorting updates the film list based on the selected option.

_**Episode List:**_

* Should display the list of movies as shown in the layout.
* The list of movies must be populated from the suggested data source.
* Each film name should be clickable and lead to a more detailed description of the film.
* The film list should update dynamically when the sorting option changes.

_**Detailed Film Description:**_

* Create a separate page to display the detailed description of a film.
* Implement a mechanism to return to the list of movies from the detailed description page using the breadcrumb.
* The detailed description of the film must include relevant information about the film as indicated by the layout.

### The _Character page_ must have realized like this

_**Character List:**_

* Should display the character list as shown in the layout.
* The list must be populated from the suggested data source.
* Each character's name should be clickable and lead to a more detailed description of the character.

_**Detailed Character Description:**_

* Create a separate page to display the detailed description of a film.
* Implement a mechanism to return to the list of movies from the detailed description page using the **[breadcrumb](https://reactrouter.com/en/main/hooks/use-matches#breadcrumbs)**.
* The detailed description of the character must include relevant information about the character as indicated by the layout.

The character page **should only display five items** below those items, you need to add **pagination** as shown in the layout

## Note

You are encouraged to use any additional libraries or frameworks that you deem suitable to enhance the development process or meet the requirements efficiently.

Write clean, well-documented code following best practices for readability and maintainability. Apply appropriate styling and layout techniques to achieve an aesthetically pleasing and user-friendly design.

Implement suitable error handling and validation for user interactions. Usage of TypeScript and tests (React Testing Library) is optional, but will be a plus.

## Additionally

If you finish the main task quickly enough, you can also do the rest of the tabs using Extra endpoints

`.../planets/{id}`- To get planets data
`.../species/{id}`- To get species data
`.../vehicles/{id}`- To get vehicles data
`.../starships/{id}`- To get starships data

### Useful links

* [Json-server](https://github.com/typicode/json-server)
* [React](https://ru.legacy.reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [React Router](https://reactrouter.com/en/main)
* [Axios](https://axios-http.com/docs/intro)
* [Vite](https://vitejs.dev/guide/)

/label level::elementary
/label react::component
