import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-main-layout',
standalone: true,
imports: [CommonModule, RouterModule],
templateUrl: './main-layout.html',
styleUrls: ['./main-layout.css']
})
export class MainLayout implements OnInit {

role: string = '';

constructor(private router: Router) {}

ngOnInit(): void {
// Get role from localStorage when component loads
this.role = localStorage.getItem('role') || '';
}

logout(): void {
// clear login data
localStorage.clear();

// redirect to login page
this.router.navigate(['/']);

}

}
