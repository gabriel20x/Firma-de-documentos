import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SessionDialogComponent } from '../session-dialog/session-dialog.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    public _dialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(Selector:string) {
    const dialogRef = this._dialog.open(SessionDialogComponent,{
      data : {
        SelectorBox : Selector
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
