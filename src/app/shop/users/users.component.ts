import { Component, OnInit } from '@angular/core';
import {User} from "./User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users: User[] = [
    {userId:1, age:35, login:"Damian", active:true, country:"Poland", mail:"mail@kkk.pl"},
    {userId:44, age:59, login:"Leon", active:false, country:"Poland", mail:"leo@kkk.pl"}
  ];

}
