import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'api-demo';

  data:any = []
  // private
  constructor(private httpClient: HttpClient){}

  getData(){
    const url = 'https://jsonplaceholder.typicode.com/photos?albumId=1';
    this.httpClient.get(url).subscribe((response) =>{
      this.data = response;
      console.log(this.data);
    });
  }

  ngOnInit(): void {
      this.getData();
  }
}
