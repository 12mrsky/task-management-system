import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/tasks';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
selector:'app-task',
standalone:true,
imports:[CommonModule,RouterModule],
templateUrl:'./task.html',
styleUrls:['./task.css']
})
export class TaskComponent implements OnInit{

tasks:Task[]=[]
filteredTasks:Task[]=[]
paginatedTasks:Task[]=[]

currentPage=1
pageSize=5
totalPages=1

role=''

constructor(private service:TaskService){}

ngOnInit(){

this.role=localStorage.getItem("role") || ""

this.service.getTasks().subscribe((data:any)=>{
this.tasks=data
this.filteredTasks=data
this.updatePagination()
})

}

updatePagination(){

this.totalPages=Math.ceil(this.filteredTasks.length/this.pageSize)

const start=(this.currentPage-1)*this.pageSize
const end=start+this.pageSize

this.paginatedTasks=this.filteredTasks.slice(start,end)

}

searchTask(event:any){

const value=event.target.value.toLowerCase()

this.filteredTasks=this.tasks.filter(task =>
task.title.toLowerCase().includes(value) ||
task.description.toLowerCase().includes(value)
)

this.currentPage=1
this.updatePagination()

}

filterStatus(event:any){

const status=event.target.value

if(status==="All"){
this.filteredTasks=this.tasks
}
else{
this.filteredTasks=this.tasks.filter(t=>t.status===status)
}

this.currentPage=1
this.updatePagination()

}

nextPage(){
if(this.currentPage<this.totalPages){
this.currentPage++
this.updatePagination()
}
}

prevPage(){
if(this.currentPage>1){
this.currentPage--
this.updatePagination()
}
}

deleteTask(id:number){

if(confirm("Delete this task?")){

this.service.deleteTask(id).subscribe(()=>{
this.ngOnInit()
})

}

}

markComplete(task:any){

task.status="Completed"

this.service.updateTask(task.taskId,task).subscribe(()=>{
this.ngOnInit()
})

}

}