import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  constructor(private router: Router) {}

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}