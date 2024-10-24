# React Router v7 Authentication Example

This project demonstrates a basic authentication system using React Router v7, showcasing its new features and file-based routing system.

- 📖 [React Router docs](https://reactrouter.com/dev)

## Features

- File-based routing with React Router v7
- Authentication flow (login, logout, protected routes)
- Session management using cookies
- TypeScript support
- Tailwind CSS for styling

## Project Structure

- `app/routes`: Contains route components (home, login, logout)
- `app/services`: Includes session management logic
- `app/root.tsx`: Root component and layout definition
- `app/routes.ts`: Route configuration using React Router v7 syntax

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`:

- `build/server`
- `build/client`

## Authentication Flow

- The home page (`/`) is protected and requires authentication
- Users can log in at `/login`
- Logout is handled at `/logout`

## Key Files

- `app/routes/home.tsx`: Protected home page
- `app/routes/login.tsx`: Login form and authentication logic
- `app/routes/logout.tsx`: Logout handling
- `app/services/session.server.ts`: Session management utilities

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can customize the configuration in `tailwind.config.ts`.

## Learn More

- [React Router v7 Documentation](https://reactrouter.com/en/dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
