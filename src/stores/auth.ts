import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: ref(null) as Ref<User | null>,
  }),
  actions: {
    setUser(user: User | null) {
      this.user = user;
    },
    logout() {
      this.user = null;
    },
  },
});
