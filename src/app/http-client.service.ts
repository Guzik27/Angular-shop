import { Injectable } from '@angular/core';
import {HttpHandler, HttpHeaders} from "@angular/common/http";

/*definicja głównego adresu którym bęziemy się łączyć z naszym serverem*/
const BASE_URL='http://localhost:8082/api';
/*definicja nagłówka żądania, czego oczekujemy*/
const HTTP_OPTIONS = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor() { }
}
