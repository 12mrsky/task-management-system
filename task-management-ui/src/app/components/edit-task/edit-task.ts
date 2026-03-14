import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
selector:'app-edit-task',
standalone:true,
imports:[CommonModule,FormsModule],
templateUrl:'./edit-task.html',
styleUrls:['./edit-task.css']
})
export class EditTaskComponent implements OnInit{

task:any={
taskId:0,
title:'',
description:'',
status:'Pending'
}

constructor(
private route:ActivatedRoute,
private router:Router,
private taskService:TaskService
){}

ngOnInit(){

const id = Number(this.route.snapshot.paramMap.get('id'));

if(id){

this.taskService.getTaskById(id).subscribe((data:any)=>{
this.task = data;
});

}

}

updateTask(){

this.taskService.updateTask(this.task.taskId,this.task)
.subscribe(()=>{
alert("Task Updated Successfully");
this.router.navigate(['/tasks']);
});

}

}