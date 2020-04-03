import { Component, OnInit } from '@angular/core';
import {User} from "./User";
import {UserStorageService} from "../../user-storage.service";
import {HttpClientService} from "../../http-client.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userStorage: UserStorageService, private httpClient: HttpClientService) { }

  /*interfejs onInit ma metodę ngOnInit*/
  ngOnInit(): void {
    this.getUsers();  /*z komponentu getUsers będziemy wywoływać*/
  }

  users: User[] = []; /*Pusta tablica*/
  /*za każdym razem jeśli zmieni się coś w użytkownikach to z każdą zmianą do tablicy zostaną przypisane nowe rzeczy(po zmianach)*/
  getUsers() {
/* tutaj odwołuje się lokalnie do pamięci
    this.userStorage.getUsers().subscribe(users => this.users = users); /!*zwraca nam wartość i tą wartość od obserwatora przypisujemy do users*!/
*/
/* tutaj zamieniamy tylko userStorage na httpClient*/
    this.httpClient.getUsers().subscribe(users => this.users = users); /*Przekazujemy kopie, a nie referencje. obserwator zwraca wartość, wartością są produkty, product przypisujemy do tablicy products*/

  }

  removeUser(id : number) {
    /*this.userStorage.removeUser(id);*/
    this.httpClient.removeUser(id).subscribe(r => {
      this.getUsers();
    });
  }

}
