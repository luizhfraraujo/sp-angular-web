import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Security } from "src/app/utils/security.util";
import { UserService } from "src/app/services/user.service";
import { CustomValidator } from "src/app/validators/custom.validator";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ["", Validators.compose([Validators.email, Validators.required])],
      password: [
        "",
        Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.required
        ])
      ]
    });
  }

  ngOnInit() {
    const token = Security.getToken();
    if (token) {
      this.busy = true;
      this.userService.refreshToken().subscribe(
        (data: any) => {
          this.busy = false;
          this.setUser(data.customer, data.token);
        },
        err => {
          localStorage.clear();
          this.busy = false;
        }
      );
    }
  }

  submit() {
    this.busy = true;
    this.userService.authenticate(this.form.value).subscribe(
      (data: any) => {
        console.log(data);
        this.busy = false;
        this.setUser(data.data.user, data.data.token);
        this.toastr.success(
          `${data.message}`,
          "Você entrou!"
        );
      },
      err => {
        console.log(err);
        this.busy = false;
      }
    );
  }

  setUser(user, token) {
    Security.set(user, token);
    this.router.navigate(["/"]);
  }
}
