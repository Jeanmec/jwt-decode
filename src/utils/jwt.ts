import { jwtDecode } from "jwt-decode";

export const isValidJWT = (token: string): boolean => {
  try {
    jwtDecode(token);
    return true;
  } catch {
    return false;
  }
};
