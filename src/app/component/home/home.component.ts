import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any = []
  // private
  constructor(private data: DataService, private router: Router){}

  ngOnInit(): void {
      this.data.getData().subscribe((response) =>{
        this.products = response;
        console.log(this.products);
      })
  }

  redirectToProductPage(){
    this.router.navigate(['home/product']);
  }
}
