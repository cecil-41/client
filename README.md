# REACT
- React is a JavaScript library created by Facebook. It serves as a powerful tool for building user interfaces (UI) in web, mobile, and desktop applications.
- REACT is used to build a single page application.
- Only one html page get's rendered on the browser (index.html)

## Components
- Is an isolated piece of UI that is composed to build complex UI.
- The root component is the default of react app.
- It saves as a container for the other components.
- Each component defines a section.
- Components are reusable.
- Components return a UI which is in jsx (JavaScript XML).
- Components must be imported for them to be accessible in the roo app (App.js) 
- There's only a single default export per module.
- When using a default export you'd be able to specify any name to it when you importing the component.
- However, you should use curly braces {} around the component name when importing it.

## How To Create React App?
- Access the directory
- On the terminal run
    `npx create-react-app client`
- Client is the name of the app(and it can be any name of your preference)
- Then access the directory using the command:
    `cd client`
- Then start a server using the command:
    `npm start`
-The server by default runs on port 3000 of the local host.
- npm simply means 'node package manager'

## JSX vs HTML
- In html the class attribute in JSX it is called 'className'
    because class is a reserved word in JavaScript.
- In JSX you can only have one parent rapper element.
- In html we have the for attribute is called htmlFor in JSX.
- You capitalize every word except for the first word e.g onClick = , className

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
