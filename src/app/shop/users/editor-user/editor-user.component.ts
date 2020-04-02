import { Component, OnInit } from '@angular/core';
import {User} from "../User";
import {UserStorageService} from "../../../user-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-editor-user',
  templateUrl: './editor-user.component.html',
  styleUrls: ['./editor-user.component.css']
})
export class EditorUserComponent implements OnInit {

  /*Wbudowane narzędzia angulara do obslugi adresów, są zdefiniowane z Angularem. pozwala wyciągbnąć z adresu różne rzeczy(activatedroute) ====   private router: Router, private activeRoute: ActivatedRoute*/
  constructor(private userStorage: UserStorageService, private router: Router, private activeRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getUserToEdit();
  }

  /*dzięki temu odnosząc się z formularza będziemy go wyświatlali jako pusty */
  user: User = new User();

  saveUser(user: User) {
    this.userStorage.saveUser(user);
    this.router.navigate(['/shop/users']);
  }

  /*wyciągamy konkretnego usera i jego dane do edycji*/
  getUserToEdit() {
    this.activeRoute.paramMap.subscribe(params => {
      const userId = params.get('userId');
      if (userId) {
        this.user = this.userStorage.getUser(Number.parseInt(userId))/*.subscribe(p => this.user = p);*/
      }
    })
  }


}
