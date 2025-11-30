# Real Estate Management System

## Overview

This project is a web-based Real Estate Management System built using
**React**, **Vite**, and a lightweight JSON backend. It allows users to
view, manage, and update property listings through a modern and
responsive interface.

## Features

- Add, view, edit, and delete real estate property listings
- JSON-based backend stored in `Data/db.json`
- Modern development environment using Vite
- Organized component-based architecture
- Fast refresh and optimized build output

## Project Structure

    real-estate-management-system/
    ├── src/               # React components, hooks, and logic
    ├── public/            # Static assets
    ├── Data/db.json       # Property data storage
    ├── index.html         # Root HTML
    ├── package.json       # Dependencies and scripts
    └── vite.config.js     # Vite configuration

## Installation

1.  Install Node.js (v16+ recommended).

2.  Install project dependencies:

    ```bash
    npm install
    ```

3.  Start the development server:

    ```bash
    npm run dev
    ```

4.  Build the application for production:

    ```bash
    npm run build
    ```

5.  Start the API server

    ```bash
    npm run server
    ```

6.  Login credentials

    admin side : email:brian@gmail.com password:1234
    agent side : email:milly@gmail.com password:2345
    tenant side : email:derik@gmail.com password:3456

## Usage

- After running `npm run dev`, open the local URL shown in the
  terminal.
- Use the interface to browse existing listings.
- Add new properties using built-in forms.
- Edit or delete listings as needed.

## Data Storage

The system uses a local JSON file as its backend:

    /Data/db.json

This file holds all stored property information.

## Technologies Used

- **React** --- UI library
- **Vite** --- Build tool and dev server
- **JavaScript (ES6+)**
- **JSON** --- Lightweight data storage
- **Tailwindcss** --- Styling

## Contributing

Feel free to fork this repository and submit pull requests. Follow
standard coding practices and ensure code is lint‑clean.

## License

This project is open-source and available under the MIT License.
