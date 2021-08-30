import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/user/model/register';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  register: Register = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };
  errors: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerSubmit() {
    this.authService.createUser(this.register).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.router.navigate(['/users/login']);
      },
      (err) => {
        console.log(JSON.stringify(err.error));
        this.errors = err.error;
      }
    );
    console.log(JSON.stringify(this.register));
  }
}
