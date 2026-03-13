import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-register',
standalone: true,
imports: [CommonModule, FormsModule, RouterModule],
templateUrl: './register.html',
styleUrls: ['./register.css']
})
export class RegisterComponent {

user = {
name: '',
email: '',
password: '',
role: 'Employee'
};

constructor(private service:TaskService, private router:Router){}

register(){

this.service.register(this.user).subscribe({

next: () => {
alert("User Registered Successfully");
this.router.navigate(['/']);
},

error: () => {
alert("Registration Failed");
}

})

}

}