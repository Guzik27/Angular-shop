import { Component, OnInit } from '@angular/core';
import {User} from "./User";
import {UserStorageService} from "../../user-storage.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userStorage: UserStorageService) { }

  /*interfejs onInit ma metodę ngOnInit*/
  ngOnInit(): void {
    this.getUsers();  /*z komponentu getUsers będziemy wywoływać*/
  }

  users: User[] = []; /*Pusta tablica*/

  /*za każdym razem jeśli zmieni się coś w użytkownikach to z każdą zmianą do tablicy zostaną przypisane nowe rzeczy(po zmianach)*/
  getUsers() {
    this.userStorage.getUsers().subscribe(users => this.users = users); /*zwraca nam wartość i tą wartość od obserwatora przypisujemy do users*/
  }

}
