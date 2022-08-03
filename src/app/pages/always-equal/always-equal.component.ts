import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-always-equal',
  templateUrl: './always-equal.component.html',
  styleUrls: ['./always-equal.component.css']
})
export class AlwaysEqualComponent implements OnInit {

  constructor() { }
  num_1 = 0;
  num_2 = 0;
  num_3 = 0;
  
  ngOnInit(): void {
    
  }
  add(){
    this.num_3 = this.num_1 + this.num_2;
  }
}
