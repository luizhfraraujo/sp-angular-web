import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public url = "http://localhost:3333/api";

  constructor(private http: HttpClient) {}

  public composeHeaders() {
    const token = localStorage.getItem("sp.token");
    const headers = new HttpHeaders().set("Authorization", `bearer ${token}`);
    return headers;
  }

  authenticate(data) {
    return this.http.post(`${this.url}/users/authenticate`, data);
  }

  refreshToken() {
    return this.http.post(`${this.url}/users/refresh-token`, null, {
      headers: this.composeHeaders()
    });
  }

  create(data) {
    return this.http.post(`${this.url}/users`, data);
  }

  resetPassword(data) {
    return this.http.post(`${this.url}/users/reset-password`, data);
  }

  getProfile() {
    return this.http.get(`${this.url}/users`, {
      headers: this.composeHeaders()
    });
  }

  updateProfile(data) {
    return this.http.put(`${this.url}/users`, data, {
      headers: this.composeHeaders()
    });
  }
}
