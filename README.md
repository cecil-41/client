# REACT
- React is a JavaScript library created by Facebook. It serves as a powerful tool for building user interfaces (UI) in web, mobile, and desktop applications.
- REACT is used to build a single page application.
- Only one html page get's rendered on the browser (index.html)

## How To Create React App?
- Access the directory
- On the terminal run
    `npx create-react-app client`
- 'client' is the name of the app(and it can be any name of your preference)
- Then access the directory using the command:
    `cd client`
- Then start a server using the command:
    `npm start`
-The server by default runs on port 3000 of the local host.
- npm simply means 'node package manager'

## Components
- Is an isolated piece of UI that is composed to build complex UI.
- The root component is the default of react app.
- It saves as a container for the other components.
- Each component defines a section.
- Components are reusable.
- Components with props can be reused with different properties to display different information.
- Components can be nested inside another components.
- Components return a UI which is in jsx (JavaScript XML).
- Components must be imported for them to be accessible in the root app (App.js) 
- `import RegularStyleSheet from './components/RegularStyleSheet';`
- There's only a single default export per module.
- When using a default export you'd be able to specify any name to it when you importing the component.
- Otherwise, you should use curly braces {} around the component name when importing it.
- In react when we wrap up something in curly braces {} react will read it as js expression instead of a normal text.
- `rfc` to generate a function
- Each component must have just one and one return statement.

## Types of components
1. Functional components: Are JavaScript functions that takes props as args and return a valid jsx(makeup UI)
2. Class components: It must have render method that returns the UI. Gradual fading away, so we'll use functional components.


## JSX vs HTML
- In html the class attribute in JSX it is called 'className'
    because class is a reserved word in JavaScript.
- In JSX you can only have one parent rapper element.
- In html we have the 'for' attribute is called htmlFor in JSX.
- You capitalize every word except for the first word e.g onClick = , className (pascal naming converntion)
- Since components are independent then how do we pass information from one component to another?
- That's where props comes in.
- We use single tags in react for className etc.

## Props
- Stands for properties
- It is an object that stores the value of an attribute of a tag.
- They allow us to pass data from one component to another.
- Precisely from a parent component to a child component.
- Props are immutable, meaning its value cannot be changed.
- We need to take props as args within our functions.
- We need to wrap the props.attribute within curly brackets.
- Components with props can be reused with different properties to display different information.
- Components without children are always identified by the self closing tags.
    `<DemoComponent name='Cecil Bennett' country='South Africa'/>`
- Components with children are always identified by an open and closing tags.
    `<DemoComponent name='Cecil Bennett' country='South Africa'>
        <h1>I am fullstack developer</h1>
        <img className='img-fluid w-25' src={profile} alt=''></img>
    </DemoComponent>`
- A same component can be passed different value props.
- In between opening and closing tags of a function component are what we call children.
- All we need to do to access/retrive the children pprops is to call this in the parent component:
    `props.children`
- The value of a prop that is send from a parent component cannot be altered in the child component.

## Props Distructering
- Is a JS feature that allows you extract multiple pieces of data from an array and assign them to their variables.
- Improves code readability
- We do not use'props.' anymore when using props distructering.
- We take them on the function and user curly brackets to list the props.

## UseState() Hooks
- Usestate hook is a function
- It returns an array of two entries.
- This is how we import the useState hook:
    `import React,{useState} from 'react'`

## Hooks
- Hooks can only be calle at the top level, therefore not inside a loop etc. 
- Hooks can only be called inside a react function.

## Conditional rendering
### Method 1
- We use this method to render something if true and something else if false.
- ? is used to denote when the condition is true and 
- : is used to denote when the condition is false.
    `export default function UserLogin() {
        const isLoged = true;
        return (
            <div>
                {isLoged ? <h1>Welcome to our platform</h1>
                :<h1>Access denied, user not authorised!</h1>}
            </div>
        )
    }`
### Method 2
- We use this method to render something if only true.
- We use && to denote if the condition is true.
    `export default function UserLogin() {
        const isLoged = true;
        return (
            <div>
                {isLoged && 
                    <h1>Access granted, welcome!</h1>
                }
            </div>
        )
    }`

## Mapping
- map method takes in a function as an arg
    employees.map((employee)=> {
            return <h2>{employee}</h2>
        })

- keys must be declared at the upper level.

## Styling
1. Regular CSS
- import the styling file to the right module using its path e.g.
`import './myStyles.css'`
### Conditional Styling
- You can use props to control styling 
    `export default function RegularStyleSheet({ className }) {
        const computedClassName = className ? 'class1' : 'class2';
        return (
            <div>
                <h1 className={computedClassName}>Learning how to style a react component.</h1>
            </div>
        );
    }`
- App.js
`<RegularStyleSheet className={true}/>`
- When the prop is true then class1 will be applied else(false) class2 will be applied which is passed when calling the component in App.js

2. Inline Styling
- Create an object first then target and style that object under/inside the function component.
    `export default function Inline() {
            const heading = {
                fontSize: '100px',
                color: ''
            }
        return (
            <div>
                <h1 style={heading}>This is inline styling</h1>
            </div>
        )
    }`
- How you call styling classes
`<h1 style={heading}>This is inline styling</h1>`

3. CSS Modules
- A CSS Module is a CSS file in which all class and animation names are scoped locally by default. This means that the styles defined in a CSS Module are scoped to the component they are imported into, preventing clashes with other styles in the application.
- Name your CSS file with a .module.css extension, e.g., styles.module.css`.
- Give the file a name and specify the location as you import it.
`import cssstyles from './appStyles.module.css;`
- How you call the styling classes.
    `import cssstyles from './appStyles.module.css';

    export default function CSSModule() {
        return (
            <div>
                <h1 className={cssstyles.header}>Hello, World!</h1>
                <p className={cssstyles.content}>This is a paragraph with scoped styles.</p>
                <h1 className="error">Text from myStyles.css</h1>
            </div>
        )
    }`


## Form Input
- We need to import useState() hook.
- Then assign the value to the first value
- Use the set variable with the onchange variable

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
