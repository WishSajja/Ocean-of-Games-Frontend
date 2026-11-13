# Ocean of Games – Frontend

A modern, responsive game discovery platform built with **React, TypeScript, and Vite**. Ocean of Games allows users to explore video games, discover new titles, and browse game information through an intuitive interface.

The frontend communicates with a custom **ASP.NET Core Web API**, which integrates with the GameBrain API and stores cached game information in Microsoft SQL Server.

## Screenshots

<!-- Add screenshots of your application here -->

<!--
![Home Page](./screenshots/home-page.png)
![Game Details](./screenshots/game-details.png)
-->

## Features

- **Game Discovery** – Browse a collection of video games.
- **Game Search** – Search for games by name.
- **Game Filtering** – Filter games using available criteria such as genre and platform.
- **Responsive Design** – Interface adapts to different screen sizes.
- **Game Information** – View available details about games.
- **Platform Support** – Display supported gaming platforms.
- **Screenshot Gallery** – Browse game screenshots.
- **API Integration** – Retrieve game data from the Ocean of Games ASP.NET Core backend.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| TypeScript | Type safety and maintainable code |
| Vite | Development server and build tooling |
| Chakra UI | UI components and styling |
| Bootstrap | Additional styling utilities |
| Axios | HTTP requests to the backend API |

## Project Structure

```text
Ocean-of-Games/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── assets/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

*The structure above is illustrative. Adjust it to match the actual folders in your project.*

## Getting Started

Follow these steps to run the frontend locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

You will also need the Ocean of Games backend API running if you want to retrieve live game data.

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-FRONTEND-REPOSITORY.git
```

### 2. Navigate into the Project

```bash
cd Ocean-of-Games
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure the Backend API URL

Configure the frontend to point to your running ASP.NET Core API.

If your application uses an environment variable, create a `.env` file in the project root:

```env
VITE_API_URL=https://localhost:YOUR_API_PORT
```

Replace the example URL with your actual backend address and port. Make sure the variable name matches what your API client reads.

Do not commit local `.env` files or private credentials. Use a `.env.example` file to document required environment variables.

### 5. Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

Open that address in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build |
| `npm run lint` | Runs linting, if configured |

## Backend Integration

Ocean of Games uses a separate ASP.NET Core Web API backend.

The backend is responsible for communicating with the GameBrain API, caching game information in SQL Server, and providing data to the frontend.

**Backend repository:** [Ocean of Games API](https://github.com/YOUR-USERNAME/YOUR-BACKEND-REPOSITORY)

## Related Project

- **Frontend:** This React + TypeScript repository.
- **Backend:** ASP.NET Core Web API built with C#, Entity Framework Core, and Microsoft SQL Server.

## Future Improvements

Potential improvements include:

- User authentication and personalized game collections.
- Game ratings and reviews.
- Favorites and wishlists.
- Improved game recommendation features.
- Automated frontend testing.

## Contributing

Suggestions, bug reports, and contributions are welcome.

If you find an issue or have an idea for improving the application, feel free to open an issue or submit a pull request.

## License

This project is currently available for learning and demonstration purposes. Add a license file if you intend to distribute it under specific reuse terms.
