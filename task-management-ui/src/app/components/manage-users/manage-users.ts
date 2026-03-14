import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
selector:'app-manage-users',
standalone:true,
imports:[CommonModule,FormsModule],
templateUrl:'./manage-users.html'
})
export class ManageUsersComponent implements OnInit{

users:any[]=[]
newPassword=''

constructor(private taskService:TaskService){}

ngOnInit(){
this.loadUsers()
}

loadUsers(){
this.taskService.getUsers().subscribe((data:any)=>{
this.users=data
})
}

resetPassword(userId:number){
this.taskService.resetPassword(userId,this.newPassword)
.subscribe(()=>{
alert("Password Reset Successfully")
this.newPassword=''
})
}

}