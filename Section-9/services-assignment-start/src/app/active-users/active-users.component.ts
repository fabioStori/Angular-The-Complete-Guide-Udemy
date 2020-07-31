import { Component, Input, OnInit } from '@angular/core';
import { UsersServices } from '../shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  @Input() users: string[];

  constructor(private usersServices: UsersServices){}

  ngOnInit(){
    this.users = this.usersServices.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersServices.setToInactive(id)
  }
}
