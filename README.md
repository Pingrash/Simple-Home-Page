# Simple Home Page

## [Hosted Here](https://simple-home-page.netlify.com/)

## Current Ideas / To Do's

### Firebase Integration

I am currently thinking about adding the ability for the user to log in and sync their links and reminders between machines.
Local Storage would still be the primary way of storing the data to avoid potential slowdowns of accessing the firebase database. A flag could be set to the database as to wether the machine has the latest data set.

_eg._
ONLOAD - Local Storage data is mounted
POST MOUNT - Connection to Firebase to determine if latest data is downloaded. If not, download and set it
ON CHANGES - After the new data is set to Local Storage then it would be uploaded to Firebase and new update flag set.

#### Pros

- Quick and easy setup on new machines and different browsers
- Backup for links and reminders if something goes wrong with Local storage data

#### Cons

- Could introduce the potential for some hang time as data is set/retrieved.
- If the user wants to have unique links and reminders per machine, this could make that more difficult.
  - **Note** - This issue could maybe be prevented by adding profiles the user could create and switch between.
    _eg._ Home, Work, Laptop, etc.

### Layout Reactiveness

Need to check how reactive the page is on smaller screen sizes.
It it not likely the page will be used on mobile screens but tablet screens would definitely be worth checking.

## About

This project is to create a fast, simple home page to use in the browser.
I am planning for the page to provide some simple information like time, date and possibly weather. I also plan to have a section of link buttons to sites that the user can set.

I am using React functional components with hooks for this project. Testing utilises Jest and Enzyme.

## Project Structure

CONTEXT -> HANDLERS -> COMPONENTS

Context is being utilised for state management. Handlers takes state and functions from context and sets them to the appropriate components as props.

I am using this approach to keep state and the rendering of the components seperate. This keeps the files cleaner and means that they have their set purposes.
By having the state passed to the components as props, this makes the process of testing each component a lot easier.

## Styling Structure

For styling I ended up utilising the [material-ui](https://material-ui.com/) library for a clean, responsive layout at the component level. As such the components utilise JSX styling instead of css files.

## Data Storage

There will not be much data required to be stored and won't be more then some stringified objects.
Because of this I am utilising LocalStorage to store link data and will likely use either Local or Session storage as appropriate for other requirements as they come up.

## Testing

For testing Jest and Enzyme are being used. I am trying to use a TDD approach to developing this project and as such am creating tests for each component before starting on the code for them.

## Components Overview

### Greeting Header

The greeting header takes the stored username and gives a time based greeting to the user.
Beneath the greeting is the current local date and time.

### Link Buttons

The user can set a series of links buttons to give them quick access to their favorite sites.
The links can be added/removed/rearranged through the settings button located at the top left of the link group.

### Reminders

The user can set themselves reminders. At this stage they only consist of a title and a text body but more options could be added later.
