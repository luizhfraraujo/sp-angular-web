import { User } from "../models/user.model";

export class Security {
  public static set(user: User, token: string) {
    const data = JSON.stringify(user);

    localStorage.setItem("sp.user", btoa(data));
    localStorage.setItem("sp.token", token);
  }

  public static setUser(user: User) {
    const data = JSON.stringify(user);
    localStorage.setItem("sp.user", btoa(data));
  }

  public static setToken(token: string) {
    localStorage.setItem("sp.token", token);
  }

  public static getUser(): User {
    const data = localStorage.getItem("sp.user");
    if (data) {
      return JSON.parse(atob(data));
    } else {
      return null;
    }
  }

  public static getToken(): string {
    const data = localStorage.getItem("sp.token");
    if (data) {
      return data;
    } else {
      return null;
    }
  }

  public static hasToken(): boolean {
    if (this.getToken()) return true;
    else return false;
  }

  public static clear() {
    localStorage.removeItem("sp.user");
    localStorage.removeItem("sp.token");
  }
}
