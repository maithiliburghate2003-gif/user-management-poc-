import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule   // ✅ THIS FIXES ngModel
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {

  user: any = {};
  users: any[] = [];

  constructor(private userService: UserService) {}

  save() {
    this.userService.saveUser(this.user).subscribe(() => {
      alert('User saved successfully');
      this.loadUsers();
      this.user = {};
    });
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  ngOnInit() {
    this.loadUsers();
  }
}
