import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {

  myProducts: any = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {

    this.data.getData().subscribe((product) =>{
      this.myProducts = product;
    })
  }

}
