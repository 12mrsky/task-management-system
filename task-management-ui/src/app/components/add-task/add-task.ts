import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.html',
  styleUrls: ['./add-task.css']
})
export class AddTaskComponent implements OnInit {

  employees: any[] = [];
  role = '';

  task: any = {
    title: '',
    description: '',
    status: 'Pending',
    assignedTo: '',
    dueDate: ''
  };

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit() {

    this.role = localStorage.getItem("role") || "";

    if (this.role !== "Admin") {
      alert("Access Denied");
      this.router.navigate(['/tasks']);
      return;
    }

    this.taskService.getEmployees().subscribe((data: any) => {
      this.employees = data;
    });

  }

  addTask() {

    const taskData = {
      title: this.task.title,
      description: this.task.description,
      status: this.task.status,
      assignedTo: Number(this.task.assignedTo),   // convert to number
      dueDate: new Date(this.task.dueDate).toISOString() // correct date format
    };

    this.taskService.addTask(taskData)
      .subscribe({
        next: () => {
          alert("Task Added Successfully");
          this.router.navigate(['/tasks']);
        },
        error: (err) => {
          console.error(err);
          alert("Error creating task");
        }
      });

  }

}