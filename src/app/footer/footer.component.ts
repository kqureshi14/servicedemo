import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  users:any=[];
 
  constructor(private userData:UserDetailsService){
    console.info('user data in footer ',userData.users());

    this.users = userData.users();

  }


}
