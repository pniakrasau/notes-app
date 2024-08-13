# Drag-and-Drop Notes Application

This web application allows users to create notes, reorder them, and move them to the trash using drag-and-drop functionality. 
It provides a user-friendly interface for managing notes efficiently.

## Important info
App is WIP. TO DO:
  - Code coverage (unit and e2e).
  - Theme changes (move common styles to theme)
  - Localization support (i18n)
  - Move shared code to libs to leverage from Nx cache
  - Integration with a real API

## Prerequisites

The preferred package manager is npm. If npm is not installed on your system, you will need to install it. Typically, npm comes bundled with Node.js. Therefore, please visit the Node.js [website](https://nodejs.org/en/) to download and install Node.js, which includes npm.

Required versions of engines:

- `npm` version 9+
- `node` version 20+

## Local setup
- run `npm install`
- run `npm run start`

 ## Features

 - Add Notes: Users can easily add new notes by clicking on the "Add Note" button.
 - Reorder Notes: Notes can be reordered by dragging and dropping them to the desired position.
 - Move to Trash: Notes can be moved to the trash bin by dragging them to the designated area.
 - Fake API: The application uses a fake API for simplicity, allowing users to interact with notes without the need for a backend server.

## Commands

| Command         | Description                            |
|-----------------|----------------------------------------|
| `start`         | Builds and starts applications locally |
| `build:dev`     | Builds app for dev                     |
| `build:preview` | Builds app for preview                 |
| `build:live`    | Builds app for live                    |
| `test`          | Run unit tests                         |
| `test:cov`      | Run unit tests with coverage report    |
| `e2e`           | Run e2e headless                       |
| `e2e:ui`        | Run e2e in UI                          |


## Tech stack
- Nx
  - scaffolding (base project structure, code quality tools setup, unit/e2e tests setup, bundler config)
  - cache
- Webpack
  - bundle code
  - local development with Dev Server
- TanStack Query
  - fetching/mutating data
  - caching data
  - handling loading state
  - handling error state
  - optimistic updates
  - reduce code
- React-dnd
  - managing drag and drop
- Jest + React testing library
  - unit and integrations tests
- Playwright
  - e2e tests


### Nx
Nx was chosen for its comprehensive scaffolding capabilities, which include built-in support for generating unit and end-to-end (e2e) tests, setting up linters, bundling applications, and managing caching effectively. Nx's ability to streamline the development process by providing a unified toolset for these tasks greatly enhances productivity and code quality.
While alternatives like create-react-app offer similar scaffolding features, Nx also provides caching capabilities further boost development speed by intelligently caching build artifacts and dependencies, resulting in faster build times and improved developer efficiency.
Drawbacks: Learning curve due to its more complex configuration and setup process.

### Webpack
I chose Webpack for bundling my project's assets because it offers powerful configuration options, a robust plugin system, and efficient module bundling capabilities. Webpack helps optimize the performance of my application by combining and minifying resources, making it easier to manage dependencies and assets in a structured manner.
Alternatives to Webpack include Parcel, Rollup, and Browserify. Webpack advantages include its extensive plugin ecosystem and huge community.
Webpack Drawbacks - performance 

### TanStack Query
TanStack Query was chosen  for data fetching and state management due to its seamless integration of features such as data caching, loading state handling, error state handling, optimistic updates, and code reduction. 

### React-dnd
I use React DnD because it is the most popular library for implementing drag-and-drop functionality in React applications. It provides a flexible and powerful way to create interactive user interfaces with drag-and-drop capabilities.
While React Beautiful DnD offers superior animations compared to React DnD, it lacks the ability to drag elements on a grid.
React DnD Drawbacks - more code comparing to React beautiful DnD 

### Jest + React testing library
Jest and React Testing Library have become a standard choice for testing React applications.

### Playwright
I chose Playwright for end-to-end testing because it supports multiple browser vendors and cross-browser compatibility.
Alternatives: Selenium, Puppeteer, and TestCafe
Drawbacks: a slightly steeper learning curve 

