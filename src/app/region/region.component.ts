import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  
  
  constructor() { }

 
  ngOnInit() {
    console.log("regions component is called");
  }

}
