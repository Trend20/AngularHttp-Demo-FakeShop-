import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any = []
  // private
  constructor(private data: DataService){}

  ngOnInit(): void {
      this.data.getData().subscribe((response) =>{
        this.products = response;
        console.log(this.products);
      })
  }
}
