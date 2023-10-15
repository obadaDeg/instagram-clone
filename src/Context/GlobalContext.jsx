import { createContext } from "react";

export const GlobalData = createContext({
  users: [],
  currentUser: {},
  token: "",
  posts: [],
  setPosts: null,
  setToken: null,
  setCurrentUser: null,
  setUsers: null,
});
