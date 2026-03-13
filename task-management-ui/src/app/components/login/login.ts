import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  loginData = {
    email: '',
    password: ''
  };

  constructor(
    private service: TaskService,
    private router: Router
  ) {}

  login() {

    if (!this.loginData.email || !this.loginData.password) {
      alert("Please enter email and password");
      return;
    }

    this.service.login(this.loginData).subscribe({

      next: (res:any) => {

        localStorage.setItem("token", res.token);
        localStorage.setItem("role", res.role);
        localStorage.setItem("userId", res.userId);

        this.router.navigate(['/dashboard']);

      },

      error: () => {
        alert("Invalid email or password");
      }

    });

  }

}