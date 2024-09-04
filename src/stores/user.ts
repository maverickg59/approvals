import { createStore } from "zustand/vanilla";
import { users } from "@/data/data";

type UserState = {
  user: {
    user_id: number;
    user_level: string;
  };
};

type UserActions = {};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  user: users[1],
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
  }));
};
