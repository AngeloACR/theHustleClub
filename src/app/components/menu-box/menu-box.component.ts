import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-box',
  templateUrl: './menu-box.component.html',
  styleUrls: ['./menu-box.component.css']
})
export class MenuBoxComponent implements OnInit {

  aMenu: {};
  opBars: {};
  opClose: {};  

  constructor(
    ) { }

  ngOnInit() {
    this.aMenu = {
      aMenu: false,
    };
    this.opBars = {
      op0: false,
      op1: true 
    };

    this.opClose = {
      op0: true,
      op1: false 
    };
  }


  cMenu(){
	this.aMenu = {
		aMenu: false
	};	
	this.opBars = {
          op0: false,
          op1: true
    };
    this.opClose = {
      op0: true,
      op1: false
    };    
  }

  oMenu(){
	this.aMenu = {
		aMenu: true
	};	
	this.opClose = {
	      op0: false,
	      op1: true
	};     
	this.opBars = {
	  op0: true,
	  op1: false
	};
  }

}
