import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
