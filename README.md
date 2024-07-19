# Fanverse

## Introduction
Fanverse is a web application designed for K-pop enthusiasts in Kpop Server Index, a Discord server, to share and discover their favorite K-pop groups. It provides an interface to manage and display various K-pop groups, their details, and interactions. The application is built with React, Supabase, and React Router.

Whether the user is a fan of BTS's powerful performances 🔥, BLACKPINK's stunning visuals 🌸, or NCT's unique style 💚, Fanverse provides a platform to showcase and explore at least five K-pop groups worth following. Users can create, update, and delete groups, making it a dynamic and personalized K-pop experience.

## Tech Stack
- Frontend: React, Vite
- Backend & Database: Supabase (PostgreSQL)
- State Management: useReducer, useContext
- Styling: Picocss

## Features
- List K-pop groups with details
- Add new groups
- Edit existing groups
- Delete groups
- View individual group details

## Getting Started
### Prerequisites
- Node.js (v14 or higher)
- npm
- Supabase account

### Install dependencies
```
npm install
```

### Set up environment variables
Raname `.env-sample` to `.env` in the root directory.
Add your Supabase API URL and Anon Key to the .env file.

### Start the dev server
```
npm run dev
```

## Pages
### Homepage
- **Display K-pop Groups**: The homepage showcases at least five K-pop groups.
  - **Group Item**: Each K-pop group item includes:
    - `name`: The name of the K-pop group.
    - `link`: A link to their official channel or page.
    - `description`: A short description of the group.

### K-pop Group Details Page
- **Unique URL**: Each K-pop group has its own unique URL for easy sharing and navigation.
- **Details**: The details page includes:
  - `name`: The name of the K-pop group.
  - `link`: A link to their official channel or page.
  - `description`: A detailed description of the group.

### Add Group Page
- **Add New K-pop Group**: Users can add a new K-pop group by entering:
  - `name`: The name of the K-pop group.
  - `link`: A link to their official channel or page.
  - `description`: A short description of the group.
  - `image`: An image of the K-pop group.
- The new K-pop group then appears in the displayed list on the homepage.

### Edit Group Page
- **Edit K-pop Group**: Users can edit an existing K-pop group to change their:
  - `name`: The name of the K-pop group.
  - `link`: A link to their official channel or page.
  - `description`: A short description of the group.
  - `image`: An image of the K-pop group.
- The updated information is reflected on the homepage and the details page.
