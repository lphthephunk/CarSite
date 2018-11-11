import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({ templateUrl: 'home.component.html', styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {

  }

  ngOnInit() {
    const token = localStorage.getItem("token");
    const tokenExpireTime = localStorage.getItem("token-expires");

    if (token && tokenExpireTime && Date.now() < Date.parse(tokenExpireTime)) {
      
    }
    else {      
      document.getElementById("loginCheck").innerHTML = "You are NOT logged in";
      this.router.navigate(['/login']);
    }
  }

}
