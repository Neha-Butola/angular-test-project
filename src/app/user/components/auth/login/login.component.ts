import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/user/model/login';
import { AuthService } from 'src/app/user/services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  email: string;
  password: string;
  decoded: any;

  ngOnInit(): void {}

  loginSumbit() {
    this.authService.loginUser(this.email, this.password).subscribe((res) => {
      console.log(JSON.stringify(res));
      this.decoded = jwt_decode(res.token);
      localStorage.setItem('userDetails', JSON.stringify(this.decoded));

      console.log(this.decoded);
      this.router.navigate(['/dashboard/user']);
    });
    console.log(JSON.stringify(this.email + this.password));
  }
}
