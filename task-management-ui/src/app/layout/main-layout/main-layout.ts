import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.css']
})
export class MainLayout {

  role: string = '';

  constructor(private router: Router) {

    // get role from localStorage
    this.role = localStorage.getItem('role') || '';

  }

  logout(){

    localStorage.clear();

    this.router.navigate(['/']);

  }

}