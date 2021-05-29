import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-session-dialog',
  templateUrl: './session-dialog.component.html',
  styleUrls: ['./session-dialog.component.css']
})
export class SessionDialogComponent implements OnInit {
  SelectorBox :string = ""
  constructor(
    public _dialogRef : MatDialogRef<SessionDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data : {SelectorBox:string}
  ) 
    { }

  ngOnInit(): void {
    this.SelectorBox = this.data.SelectorBox
  }

}
