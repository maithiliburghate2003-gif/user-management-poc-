import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  user = {
    firstName: '',
    lastName: '',
    pincode: ''
  };

  users: any[] = [];

  save() {
    console.log(this.user);

    this.users.push({ ...this.user });

    // reset form
    this.user = {
      firstName: '',
      lastName: '',
      pincode: ''
    };
  }

}
