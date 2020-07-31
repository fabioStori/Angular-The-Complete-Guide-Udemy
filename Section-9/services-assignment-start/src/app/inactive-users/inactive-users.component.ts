import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { UsersServices } from "../shared/users.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private usersServices: UsersServices) {}

  ngOnInit() {
    this.users = this.usersServices.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersServices.setToActive(id);
  }
}
