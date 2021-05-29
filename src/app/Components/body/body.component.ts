import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  BoxSelection : string = 'Preview'
  FreeBoxSize: number = 1
  PersonalBoxSize: number = 1
  BusinessBoxSize: number = 1
  show: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  ChangeBoxStyle(BoxType : string){
    this.BoxSelection = BoxType
    switch (BoxType) {
      case 'FreeBox':
        this.FreeBoxSize = 7
        this.show = true
        break;
      case 'PersonalBox':
        this.PersonalBoxSize = 7
        this.show = true
      break;
      case 'BusinessBox':
        this.BusinessBoxSize = 7
        this.show = true
      break;
      default:
        this.FreeBoxSize = 1
        this.PersonalBoxSize = 1
        this.BusinessBoxSize = 1
        this.show = false
        break;
    }
  }

}
