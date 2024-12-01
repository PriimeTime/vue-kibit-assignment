export function login(username: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    const users = JSON.parse(localStorage.getItem("users") || "") || [];
    const user = users.find(
      (u: { username: string; password: string }) =>
        u.username === username && u.password === password
    );

    if (user) {
      resolve({ id: user.id, username: user.username, type: user.type });
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
