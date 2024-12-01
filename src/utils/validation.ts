export function validateName(name: string): boolean {
  return name.length > 0;
}

export function validatePassword(password: string): boolean {
  return password.length > 5;
}

export function validateEmail(email: string): boolean {
  return email.includes("@");
}
