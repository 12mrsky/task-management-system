import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  tasks:any[] = [];

  totalTasks = 0;
  completedTasks = 0;
  pendingTasks = 0;
  overdueTasks = 0;

  role = '';
  chart:any;

  constructor(private taskService:TaskService){}

  ngOnInit(){

    this.role = localStorage.getItem("role") || "";

    this.taskService.getTasks().subscribe((data:any)=>{

      this.tasks = data;

      this.totalTasks = this.tasks.length;

      this.completedTasks = this.tasks.filter((t:any)=>
        (t.status || '').toLowerCase() === "completed"
      ).length;

      this.pendingTasks = this.tasks.filter((t:any)=>
        (t.status || '').toLowerCase() === "pending"
      ).length;

      const now = new Date();

      this.overdueTasks = this.tasks.filter((t:any)=>
        new Date(t.dueDate) < now &&
        (t.status || '').toLowerCase() !== "completed"
      ).length;

      this.createChart();

    });

  }

  createChart(){

    if(this.chart){
      this.chart.destroy();
    }

    this.chart = new Chart("taskChart",{

      type:'pie',

      data:{
        labels:["Completed","Pending","Overdue"],

        datasets:[{
          data:[
            this.completedTasks,
            this.pendingTasks,
            this.overdueTasks
          ],
          backgroundColor:[
            "#1cc88a",
            "#f6c23e",
            "#e74c3c"
          ]
        }]
      },

      options:{
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
          legend:{
            position:'top'
          }
        }
      }

    });

  }

}