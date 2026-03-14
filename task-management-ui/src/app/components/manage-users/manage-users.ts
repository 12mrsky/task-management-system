
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
selector:'app-manage-users',
standalone:true,
imports:[CommonModule,FormsModule],
templateUrl:'./manage-users.html',
styleUrls:['./manage-users.css']
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

deleteUser(userId:number){

if(confirm("Delete this user?")){

this.taskService.deleteUser(userId).subscribe(()=>{
alert("User deleted")
this.loadUsers()
})

}

}

}