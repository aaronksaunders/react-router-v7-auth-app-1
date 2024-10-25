import { type MetaFunction } from "react-router";
import { redirect } from "react-router";
import type * as Route from "./+types.logout";
import { logout } from "../services/session.server";

/**
 * Defines metadata for the logout route.
 * 
 * @returns An array of metadata objects for the route.
 * @see https://reactrouter.com/en/dev/route/meta
 */
export const meta: MetaFunction = () => {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
};

/**
 * Action function for the logout route.
 * Handles the logout process when a POST request is made to this route.
 * 
 * @param {Route.ActionArgs} params - The action arguments.
 * @returns {Promise<Response>} Redirect response after logging out.
 * @see https://reactrouter.com/en/dev/route/action
 */
export async function action({ request }: Route.ActionArgs) {
  return logout(request);
}

/**
 * Loader function for the logout route.
 * Redirects to the login page if accessed directly.
 * 
 * @param {Route.LoaderArgs} params - The loader arguments.
 * @returns {Response} Redirect response to the login page.
 * @see https://reactrouter.com/en/dev/route/loader
 */
export async function loader({ request }: Route.LoaderArgs) {
  return redirect("/login");
}
