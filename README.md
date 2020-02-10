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

## Styling Structure

For styling I ended up utilising the [material-ui](https://material-ui.com/) library for a clean, responsive layout at the component level. As such the components utilise JSX styling instead of css files.

## Data Storage

There will not be much data required to be stored and won't be more then some stringified objects.
Because of this I am utilising LocalStorage to store link data and will likely use either Local or Session storage as appropriate for other requirements as they come up.

## Testing

For testing Jest and Enzyme are being used. I am trying to use a TDD approach to developing this project and as such am creating tests for each component before starting on the code for them.
