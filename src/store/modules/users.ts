import { defineStore } from "pinia";
import { api } from "@/http/api";
import { IUser } from "../../types/user";

export type RootState = {
  users: IUser[];
};

export const useUsersStore = defineStore("users", {
  state: () =>
    ({
      users: [],
    } as RootState),
  getters: {
    items: (state) => state.users,
  },
  actions: {
    async getUsers() {
      return await api
        .get("http://localhost:9090/users")
        .then((users) => {
          this.users =  users.data
        });
    },
  },
});
