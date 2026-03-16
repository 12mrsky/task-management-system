import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-users.html',
  styleUrls: ['./manage-users.css']
})
export class ManageUsersComponent implements OnInit {

  users: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {

    this.taskService.getUsers().subscribe({
      next: (data: any) => {

        console.log("API Response:", data);

        // Fix for .NET returning $values
        if (data.$values) {
          this.users = data.$values;
        } else {
          this.users = data;
        }

      },
      error: (err) => {
        console.error("Error loading users:", err);
      }
    });

  }

  resetPassword(user: any) {

    if (!user.newPassword || user.newPassword.length < 4) {
      alert("Enter a valid password");
      return;
    }

    this.taskService.resetPassword(user.userId, user.newPassword)
      .subscribe(() => {

        alert("Password reset successfully");

        user.newPassword = '';

      });

  }

  deleteUser(userId: number) {

    if (confirm("Delete this user?")) {

      this.taskService.deleteUser(userId)
        .subscribe(() => {

          alert("User deleted");

          this.loadUsers();

        });

    }

  }

}