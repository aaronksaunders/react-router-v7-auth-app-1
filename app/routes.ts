import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

/**
 * Define the application's route configuration using React Router v7.
 * This uses the new file-based routing system introduced in v7.
 * 
 * @see https://reactrouter.com/en/dev/routers/create-browser-router
 */
export const routes: RouteConfig = [
  /**
   * Define the index (home) route.
   * This route will be matched when the path is exactly "/".
   * The component for this route is located in "routes/home.tsx".
   * 
   * @see https://reactrouter.com/en/dev/route/route#index
   */
  index("routes/home.tsx"),

  /**
   * Define the login route.
   * This route will be matched when the path is "/login".
   * The component for this route is located in "routes/login.tsx".
   * 
   * @see https://reactrouter.com/en/dev/route/route#path
   */
  route("/login", "routes/login.tsx"),

  /**
   * Define the logout route.
   * This route will be matched when the path is "/logout".
   * The component for this route is located in "routes/logout.tsx".
   * 
   * @see https://reactrouter.com/en/dev/route/route#path
   */
  route("/logout", "routes/logout.tsx"),
];
