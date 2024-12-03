import { useAuthStore } from "@/stores/auth";

export function login(username: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    const users = JSON.parse(localStorage.getItem("users") || "") || [];
    const user = users.find(
      (u: { username: string; password: string }) =>
        u.username === username && u.password === password
    );

    if (user) {
      resolve({
        id: user.id,
        username: user.username,
        type: user.type,
        jobs: user.jobs,
      });
    } else {
      reject("Invalid username or password");
    }
  });
}

export function register(
  username: string,
  password: string,
  type: User["type"]
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const users = JSON.parse(localStorage.getItem("users") || "") || [];
    const userExists = users.some(
      (u: { username: string }) => u.username === username
    );

    if (userExists) {
      reject("Username already exists");
    } else {
      users.push({ username, password, type });
      localStorage.setItem("users", JSON.stringify(users));
      resolve();
    }
  });
}

export function bindJobToUser(jobId: string) {
  const authStore = useAuthStore();

  const users = JSON.parse(localStorage.getItem("users") || "") || [];
  const user = users.find((u: User) => u.id === authStore.user?.id);

  user.jobs = [...(user.jobs || []), jobId];

  localStorage.setItem("users", JSON.stringify(users));
}

export function removeJobFromUser(jobId: string) {
  const authStore = useAuthStore();

  const users = JSON.parse(localStorage.getItem("users") || "") || [];
  const user = users.find((u: User) => u.id === authStore.user?.id);

  user.jobs = (user.jobs || []).filter((id: string) => id !== jobId);

  localStorage.setItem("users", JSON.stringify(users));
}
