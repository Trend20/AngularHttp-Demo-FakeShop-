import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('https://zoo-animal-api.herokuapp.com/animals/rand/10');
  }
}
