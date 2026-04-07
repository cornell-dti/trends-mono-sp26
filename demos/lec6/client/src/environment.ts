// This file is for environment variables. You can add any environment variables you want here and then import them in your components. For example, if you want to add an API key, you can add it here and then import it in your components.

export const API_KEY = import.meta.env.VITE_SUPER_SECRET_KEY;

if (!API_KEY) {
  throw new Error("API_KEY is not defined in environment variables");
}
