import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'api-demo';

  images:any = []
  // private
  constructor(private data: DataService){}
  ngOnInit(): void {
      this.data.getData().subscribe((response) =>{
        this.images = response;
        console.log(this.images);
      })
  }
}
