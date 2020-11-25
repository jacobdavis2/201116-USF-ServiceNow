import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TacoService {

  constructor(private http: HttpClient) { }

  getRandomTaco() {
    return this.http.get("http://taco-randomizer.herokuapp.com/random/");
  }
}
