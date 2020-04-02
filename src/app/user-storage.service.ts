import { Injectable } from '@angular/core';
import {User} from "./shop/users/User";
import {Observable, of} from "rxjs";
import {Product} from "./shop/products/Product";

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  private users: User[] = [
    {userId:1, age:35, login:"Damian", active:true, country:"Poland", mail:"mail@kkk.pl"},
    {userId:2, age:59, login:"Leon", active:false, country:"Poland", mail:"leo@kkk.pl"}
  ];

  getUsers(): Observable<User[]>{
    return of(this.users);
  }

  removeUser(userId : number) {

    /* findIndex iteruje, a p - oznacza iteracje po obiektach w tablicy, w tym przypadku w users*/
    /* jeśli natrafi na iterującego id to zwróci zwróci indeks tego elementu tablicy */

    const userIndex = this.users.findIndex(p => p.userId === userId);
    this.users.splice(userIndex, 1);
  }

  private userIdCount: number = 3;

  saveUser(user: User) {
/*
    user.userId=this.userIdCount;
    this.users.push(user);
    this.userIdCount++
*/
     if(user.userId) {
       const userIndex = this.users.findIndex(p => p.userId === user.userId);
       this.users[userIndex] = user;
     } else{
       user.userId=this.userIdCount;
       this.users.push(user);
       this.userIdCount++;
     }
  }

  getUser(userId: number) {
    /*poszukiwanie userId w tablicy :)*/
    const userIndex = this.users.findIndex(p => p.userId === userId);
    /*przekazujemy referencje, a nie kopie, wyciągamy z tablicy user i przekazujemy konkretnego usera z Id*/
    /*przez to, jeśli klikniemy edytuj, a później anulujemy bez zapisywania to i tak zostanie zapisane*/
   /* return this.users[userIndex];*/

    return {...this.users[userIndex]}; /*przekazujemy kopie zamiast bezpośrednich referencji*/

  }


}


