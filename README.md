# Project Title - Tsuki No Yoru
A website for a Japanese restaurant with interactive menu and reservation form.

This project is a website for a Japanese restaurant. It features different menu sections, all rendered using a single reusable component with different props passed in to display varied content. This component is used on the Menu page, along with a photo carousel at the top. The Reservations page contains a form for booking a table. All fields will be validated and will show errors if the data is not valid.

## Code Showcase
This project showcases my skills in ReactJS. 
- React Router is used to enable navigation between the "pages". 
- The photo carousel is responsive and is built using react-bootstrap. 
- `formValidation.js` contains validation logic for each field, with regex used where necessary. Please note that the mobile regex works for Australian numbers.
- UUIDv4 is used to create unique keys for data in `menuLists.js`.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
You need to have the latest version of Node.js and npm installed. If not, you can download them from the official Node.js website [here](https://nodejs.org/en/download).

### Dependencies
This project uses the following dependencies which will be installed automatically when you run `npm install`:
- React-DOM
- React-Bootstrap
- React-Router-DOM
- UUID
- And others (refer to `package.json` for the full list)

### Installing
Follow these steps to get a development environment running:
1. Clone the repo: `git clone https://github.com/Lia-O1/tsuki-no-yoru.git`
2. Install NPM packages: `npm install`
3. Start the server: `npm start` (this will start the development server and open the app in a web browser)

## Live Version
A live version of the project is hosted on Netlify and can be accessed [here](https://sparkling-sundae-e35163.netlify.app/).
