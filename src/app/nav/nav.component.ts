import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navLinks = [
    {
      link: 'Home',
      route: '/'
    },
    {
      link:'Contact',
      route: '/contact'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
