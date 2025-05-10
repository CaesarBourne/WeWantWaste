# WeWantWaste

WeWantWaste is a modern web application built using **React**, **TypeScript**, and **Vite**. It provides an intuitive interface for users to select skip sizes for waste removal, check permits, and proceed with their orders. The project uses a modular and reusable component-based architecture, ensuring scalability and maintainability.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Allowed Node.js Versions](#allowed-nodejs-versions)
- [Development Approach](#development-approach)
- [Scripts](#scripts)

---

## Project Overview

WeWantWaste is designed to simplify the process of hiring skips for waste removal. Users can:

- Select skip sizes based on their requirements.
- View detailed skip information, including hire periods, prices, and restrictions.
- Check permits and proceed with their orders.
- Toggle between light and dark themes for a better user experience.

---

## UI Design

The UI design of WeWantWaste is built using modern web technologies and follows best practices for user experience and accessibility. The design is responsive, ensuring a seamless experience across various devices.

### Color Scheme

### Color Palette

The color palette of WeWantWaste is designed to be visually appealing and easy on the eyes. The following colors are used:

- **Green**: Used as primary colors for buttons and actions.
- **Dark Blue**: Used for the background elements in dark mode.
- **Gray**: Used for text and background elements in light mode.
- **White**: Used for text and background elements.
- **Black**: Used for text and background elements.

### Typography

WeWantWaste uses a clean and modern typography for its interface. The font used is **Roboto**, a popular choice for its readability and aesthetics.

### Icons

WeWantWaste uses a set of icons from **Lucide Icons** to enhance the visual appeal of the interface.

### Layout and Structure

The layout of WeWantWaste is designed to be intuitive and easy to navigate. The main sections include:

- **Header**: Contains the application title and navigation links.
- **Main Content**: Displays the skip selection and order summary.

### Interaction and User Experience

WeWantWaste aims to provide a smooth and intuitive user experience. The interface is designed to be easy to navigate and understand. Users can:

- **Select Skip Sizes**: Users can select skip sizes based on their requirements.
- **View Skip Details**: Users can view detailed information about each skip.
- **Toggle Dark Mode**: Users can toggle between light and dark modes for a personalized experience.

### Responsive Design

WeWantWaste is designed to be fully responsive, ensuring a seamless experience across various devices. The layout adapts to different screen sizes and orientations.

---

## Features

- **Skip Selection**: Users can browse and select skips based on size and price.
- **Responsive Design**: Fully responsive UI for both desktop and mobile devices.
- **Dark Mode**: Theme toggle functionality for light and dark modes.
- **Error Handling**: Graceful fallback to mock data when API calls fail.
- **Reusable Components**: Modular components like `SkipCard`, `SkipSummary`, and `OrderStepper`.
- **Toast Notifications**: Real-time feedback using the `sonner` library.
- **React Query**: Efficient data fetching and caching.

---

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and better developer experience.
- **Vite**: For fast development and build tooling.
- **Tailwind CSS**: For styling and responsive design.
- **React Query**: For data fetching and state management.
- **Radix UI**: For accessible and customizable UI primitives.
- **Lucide Icons**: For modern and lightweight icons.
- **Sonner**: For toast notifications.
- **Jest & Testing Library**: For unit testing.

---

## Project Structure

The project follows a modular structure for better scalability and maintainability:

```
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and other assets
│   ├── components/        # Reusable UI components
│   ├── lib/               # Utility functions
│   ├── mocks/             # Mock data for testing
│   ├── pages/             # Page-level components
│   ├── services/          # API service functions
│   ├── styles/            # Global styles
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Entry point
│   └── index.css          # Tailwind CSS configuration
├── .gitignore             # Git ignore file
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

---

## Setup and Installation

Follow these steps to set up the project locally:

### Installation Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/CaesarBourne/WeWantWaste.git
   cd we-want-waste
   ```

2. **Install Dependencies**:
   Run the following command to install all required dependencies:

   ```bash
   yarn
   ```

3. **Start the Development Server**:
   Launch the development server using:

   ```bash
   yarn dev
   ```

4. **Build the Project**:
   To create a production build, run:

   ```bash
   yarn build
   ```

5. **Preview the Build**:
   Preview the production build locally:

   ```bash
   yarn preview
   ```

6. **Lint the Code**:
   Ensure code quality by running the linter:
   ```bash
   yarn lint
   ```

---

## Allowed Node.js Versions

This project supports **Node.js versions 16.x to 20.x**. Ensure your Node.js version falls within this range to avoid compatibility issues.

To check your Node.js version, run:

```bash
node -v
```

If you need to switch Node.js versions, consider using a version manager like [nvm](https://github.com/nvm-sh/nvm).

```bash

nvm install 20
nvm use 20
```

## Domain access project

The project is deployed on Vercel you can access with this `link`

https://we-want-waste-eight.vercel.app/

You can also run the project on sandbox with the link below

**Sand Box** : - https://codesandbox.io/p/github/CaesarBourne/WeWantWaste/main

---

## Development Approach

The project was developed with the following principles in mind:

1. **Component-Based Architecture**:

   - The UI is segmented down into reusable components like `SkipCard`, `SkipSummary`, and `OrderStepper`.
   - Each component is self-contained, with its own logic and styling.

2. **State Management**:

   - Local state is managed using React's `useState` and `useEffect` hooks.
   - Global state and data fetching are handled using **React Query** for efficient caching and synchronization.

3. **Error Handling**:

   - API errors are gracefully handled by falling back to mock data.
   - Toast notifications inform users of errors or successful actions like selecting an item.

4. **Styling**:

   - Tailwind CSS and Shadcn components are used for styling.
   - Custom themes and colors are defined in the `index.css` file.

5. **Testing**:

   - Unit tests are written using **Jest** and **Testing Library**.
   - Mock data is used to simulate API responses during testing.

6. **Dark Mode**:
   - The `ThemeProvider` component manages light and dark themes.
   - Users can toggle themes using the `ModeToggle` component.

---

## Scripts

The following npm scripts are available:

- **`yarn dev`**: Starts the development server.
- **`yarn build`**: Builds the project for production.
- **`yarn preview`**: Previews the production build.
- **`yarn test`**: Runs the written test case in code.
- **`yarn lint`**: Runs ESLint to check for code quality issues.
- ***

For any questions or feedback, feel free to reach out to the project maintainer at [caesaradek@gmail.com].
