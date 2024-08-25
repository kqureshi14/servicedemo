import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }

  users(){
    return    [
      {name:'kaleem',email:'kaleem@gmail.com'},
      {name:'sami',email:'sami@gmail.com'},
      {name:'john',email:'john@gmail.com'},
      {name:'hashir',email:'hashir@gmail.com'},
      {name:'mike',email:'mike@gmail.com'},
     ];
  }
}
