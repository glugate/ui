import { defineStore } from "pinia";
import { api } from "@/http/api";
import { IUser } from "../../types/user";

export type RootState = {
  items: IUser[];
};

export const useUsersStore = defineStore("users", {
  state: () =>
    ({
      items: [],
    } as RootState),
  getters: {
    items: (state) => state.items,
  },
  actions: {
    async getUsers() {
      return await api
        .get("http://localhost:9090/users")
        .then((users) => {
          this.items = users.data;
        });
    },
  },
});
