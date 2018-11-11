import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router"

@Component({templateUrl: 'login.component.html', styleUrls: ['./login.component.css']})
export class LoginComponent {
  http: HttpClient;

  constructor(http: HttpClient, private router: Router) { this.http = http; }

  onSubmit(f : NgForm) {
    var email = f.value.email;
    var password = f.value.password;
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json");
    this.http.post<any>("https://localhost:44358/api/auth/login", { "username": email, "password": password }, { headers: headers })
      .subscribe(
        (val) => {
          console.log(val);
          localStorage.setItem("token", val.token);
          localStorage.setItem("token-expires", val.expires)
          this.router.navigate(['/home']);

        },
        response => {
          console.log(response);
        },
        () => {
          console.log("POST complete");
      });
   
  }
}
