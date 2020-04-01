import { Injectable } from '@angular/core';
import {User} from "./shop/users/User";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  private users: User[] = [
    {userId:1, age:35, login:"Damian", active:true, country:"Poland", mail:"mail@kkk.pl"},
    {userId:44, age:59, login:"Leon", active:false, country:"Poland", mail:"leo@kkk.pl"}
  ];

  getUsers(): Observable<User[]>{
    return of(this.users);
  }

  removeUser(id : number) {

    /* findIndex iteruje, a p - oznacza iteracje po obiektach w tablicy, w tym przypadku w users*/
    /* jeśli natrafi na iterującego id to zwróci zwróci indeks tego elementu tablicy */

    const userIndex = this.users.findIndex(p => p.userId === id);
    this.users.splice(userIndex, 1);
  }

}


