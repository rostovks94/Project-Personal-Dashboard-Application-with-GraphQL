# Personal Dashboard Application with GraphQL

## Overview

This project is a personal dashboard application built with React and GraphQL. It uses the GraphQL API from [graphqlzero](https://graphqlzero.almansi.me/api) to fetch user data, posts, albums, and todos. The application allows users to manage their profile, posts, albums, and todos, providing a responsive user interface with dark mode support.

## Features

- **Profile Section:**
  - Displays the user's personal information, including name, email, address, phone number, website, and company details.

- **Posts Section:**
  - Shows a list of the user's posts.
  - Allows viewing detailed information about each post and its associated comments.
  - Supports creating, editing, and deleting posts.

- **Albums and Todos Sections:**
  - Displays the user's albums and todos.
  - Supports sorting todos by status (completed/incomplete) and marking them as complete.

- **Responsive Design:**
  - Ensures the dashboard is responsive across different devices and screen sizes.
  
- **Dark Mode:**
  - Allows users to switch between light and dark themes.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   cd repository-name

2. Install the dependencies:
    npm install

3.	Run the application:
    npm run dev


## Project Structure

      my-dashboard
│
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── AlbumItem.tsx
│   │   ├── AlbumSearch.tsx
│   │   ├── PostItem.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── TodoItem.tsx
│   │   └── TodoSearch.tsx
│   ├── css
│   │   ├── layout.css
│   │   ├── navbar.css
│   │   └── ProfileCard.css
│   ├── graphql
│   │   ├── mutations.ts
│   │   └── queries.ts
│   ├── view
│   │   ├── AlbumsView.tsx
│   │   ├── PostDetails.tsx
│   │   ├── PostsView.tsx
│   │   ├── ProfileView.tsx
│   │   └── TodosView.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

## Technologies Used

	•	React: For building the user interface.
	•	TypeScript: For static type checking.
	•	GraphQL & URQL: For querying data from the GraphQL API.
	•	Vite: As a development server and build tool.
	•	CSS: For styling the application, with separate stylesheets for different components.
	•	React Router: For routing between different views (Profile, Posts, Albums, Todos).
	•	Dark Mode: Implemented using local storage to save the user’s theme preference.

## Usage

	•	Profile Section: View your personal information such as name, email, phone number, and company details.
	•	Posts Section: Manage your posts by creating, editing, viewing, and deleting posts.
	•	Albums Section: Browse your albums and view photos.
	•	Todos Section: Manage your todos by marking them as complete or deleting them.
	•	Dark Mode: Toggle between light and dark themes using the button in the top-right corner.

## Future Enhancements

	•	Search Functionality: Add search capability to filter posts, albums, and todos.
	•	Social Sharing: Allow users to share their posts on social media.
	•	Sorting and Filtering: Implement sorting and filtering options for posts, albums, and todos.
