import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  userDetails: any = JSON.parse(localStorage.getItem('userDetails'));
  constructor(private profileService: ProfileService) {}
  user: any;

  ngOnInit(): void {
    this.profileService.getprofile().subscribe(
      (res) => {},
      (err) => {
        console.log(JSON.stringify(err.data));
      }
    );
  }
}
