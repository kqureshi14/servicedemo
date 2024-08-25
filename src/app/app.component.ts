import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./footer/footer.component";
import { UserDetailsService } from './services/user-details.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicedemo';
  users:any=[];
 
  constructor(private userData:UserDetailsService){
    console.info('user data ',userData.users());

    this.users = userData.users();

  }





}
