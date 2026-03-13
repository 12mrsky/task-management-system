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

employees:any[] = [];
role='';

task:any={
title:'',
description:'',
status:'Pending',
assignedTo:'',
dueDate:''
}

constructor(
private taskService:TaskService,
private router:Router
){}

ngOnInit(){

this.role = localStorage.getItem("role") || "";

if(this.role !== "Admin"){
alert("Access Denied");
this.router.navigate(['/tasks']);
}

this.taskService.getEmployees().subscribe((data:any)=>{
this.employees=data;
})

}

addTask(){

this.task.createdDate=new Date();

this.taskService.addTask(this.task)
.subscribe(()=>{
alert("Task Added Successfully")
this.router.navigate(['/tasks'])
})

}

}