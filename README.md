# Simple Home Page

## About

This project is to create a fast, simple home page to use in the browser.
I am planning for the page to provide some simple information like time, date and possibly weather. I also plan to have a section of link buttons to sites that the user can set.

I am using React functional components with hooks for this project. Testing utilises Jest and Enzyme.

## Project Structure

CONTEXT -> HANDLERS -> COMPONENTS

Context is being utilised for state management. Handlers takes state from context and sets them to the appropriate components as props.

I am using this approach to keep state and the rendering of the components seperate. This keeps the files cleaner and means that they have their set purposes.
By having the state passed to the components as props, this makes the process of testing each component a lot easier.
