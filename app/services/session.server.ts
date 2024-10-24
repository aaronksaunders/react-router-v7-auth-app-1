// app/services/session.server.ts

import { createCookieSessionStorage, redirect } from "react-router";

/** Represents a user in the system */
type User = { id: string; username: string; password: string };

/**
 * Creates a cookie-based session storage.
 * @see https://reactrouter.com/en/dev/utils/create-cookie-session-storage
 */
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: ["s3cret"],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
});

export const { commitSession, destroySession } = sessionStorage;

/**
 * Retrieves the user session from the request.
 * @param {Request} request - The incoming request.
 * @returns {Promise<Session>} The user session.
 */
const getUserSession = async (request: Request) => {
  return await sessionStorage.getSession(request.headers.get("Cookie"));
};

/**
 * Logs out the user by destroying their session.
 * @param {Request} request - The incoming request.
 * @returns {Promise<Response>} Redirect response after logout.
 */
export async function logout(request: Request) {
  console.log("logout");
  const session = await getUserSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

const USER_SESSION_KEY = "userId";

/**
 * Retrieves the user ID from the session.
 * @param {Request} request - The incoming request.
 * @returns {Promise<string | undefined>} The user ID if found, undefined otherwise.
 */
export async function getUserId(
  request: Request
): Promise<User["id"] | undefined> {
  const session = await getUserSession(request);
  const userId = session.get(USER_SESSION_KEY);
  return userId;
}

/**
 * Creates a new user session.
 * @param {Object} params - The parameters for creating the session.
 * @param {Request} params.request - The incoming request.
 * @param {string} params.userId - The user ID to store in the session.
 * @param {boolean} params.remember - Whether to create a persistent session.
 * @param {string} [params.redirectUrl] - The URL to redirect to after creating the session.
 * @returns {Promise<Response>} Redirect response with the new session cookie.
 */
export async function createUserSession({
  request,
  userId,
  remember = true,
  redirectUrl,
}: {
  request: Request;
  userId: string;
  remember: boolean;
  redirectUrl?: string;
}) {
  const session = await getUserSession(request);
  session.set(USER_SESSION_KEY, userId);
  return redirect(redirectUrl || "/", {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: remember
          ? 60 * 60 * 24 * 7 // 7 days
          : undefined,
      }),
    },
  });
}
