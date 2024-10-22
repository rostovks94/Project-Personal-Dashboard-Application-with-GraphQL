# GraphQL User Dashboard

## Overview
This project is a **GraphQL-based User Dashboard** that allows users to effortlessly navigate, interact with, and manage their profile data. Built with React, TypeScript, and GraphQL, the application supports a user-friendly interface for viewing and managing personal information, posts, albums, and todos. The project was created as part of a practical assignment, showcasing my expertise in both front-end and back-end development using GraphQL.

The project was developed as a homework assignment during the **Coding Temple** bootcamp, demonstrating my skills in building full-stack web applications.

**GraphQL API used**: [GraphQL Zero API](https://graphqlzero.almansi.me/api)

## Features
- **Profile Section**:
  - Displays the user’s personal information, including name, email, address, phone number, website, and company details.
  
- **Posts Section**:
  - Lists the user's posts retrieved from the GraphQL API.
  - Allows viewing detailed information for each post, including associated comments.
  
- **Create, Edit, and Delete Posts**:
  - Enables users to create new posts, update existing posts, and delete posts using GraphQL mutations.
  
- **Albums and Todos Section**:
  - Displays the user’s albums and todos fetched from the GraphQL API.
  - Allows users to view and organize todos based on their status (completed/incomplete).
  
- **Responsive Design**:
  - Fully responsive interface for use across various devices and screen sizes.
  
- **Search and Sorting**:
  - Search functionality to filter posts, albums, or todos by keywords.
  - Sorting and filtering options for albums and todos.
  
- **Dark Mode**:
  - Provides an option for users to toggle between light and dark modes for better user experience.

## Technologies Used
- **Frontend**: React, TypeScript
- **GraphQL**: Apollo Client for interacting with the GraphQL API
- **UI**: CSS for styling, responsive design for various devices

## GraphQL Queries and Mutations
- **Queries**:
  - Fetch user information, posts, albums, and todos.
  
- **Mutations**:
  - Create, update, and delete posts via GraphQL mutations.

## Project Structure

```bash
my-dashboard/
├── dist/                     # Distribution folder after build
├── node_modules/             # Dependencies
├── public/                   # Public assets like index.html
├── src/                      # Source files
│   ├── assets/               # Static assets
│   ├── components/           # React components
│   ├── css/                  # Stylesheets
│   ├── graphql/              # GraphQL queries and mutations
│   │   ├── mutations.ts      # GraphQL mutations for posts
│   │   ├── queries.ts        # GraphQL queries for fetching data
│   ├── view/                 # Views and page components
│   ├── App.tsx               # Main app component
│   └── main.tsx              # Entry point for React app
├── .gitignore                # Git ignore file
├── index.html                # HTML template
├── package.json              # Project dependencies and scripts
├── README.md                 # Project README
└── tsconfig.json             # TypeScript configuration
```

## Installation and Setup
**To run this project locally, follow these steps**:

### 1. Clone the Repository:
```bash
git clone https://github.com/rostovks94/GraphQL-User-Dashboard.git
cd GraphQL-User-Dashboard/my-dashboard
```

### 2. Install Dependencies: 
```bash
npm install
```

### 3. Run the Development Server:
```bash
npm run dev
```

### 4. Build for Production:
```bash
npm run build
```

### 5. Preview the Production Build:
```bash
npm run preview
```

The application will be running on http://localhost:3000.

Additional Features (Optional)
Dark Mode: Users can toggle between light and dark mode for a personalized experience.
Social Sharing: Consider adding functionality to share posts or albums on social media.
Analytics Dashboard: Track user interactions with posts and todos.
Deployment
The project is deployed using Vercel. You can access the live application here: https://project-personal-dashboard-application-with-graph-becw76jgc.vercel.app

Conclusion
This GraphQL-based User Dashboard is designed to provide users with a modern and intuitive interface for managing their personal information, posts, albums, and todos. By leveraging GraphQL for efficient data fetching and mutations, the project demonstrates a practical application of both front-end and back-end development skills.

Feel free to explore the project, and if you have any questions or feedback, feel free to reach out.
