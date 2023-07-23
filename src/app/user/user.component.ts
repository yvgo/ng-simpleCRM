import { DialogAddUserComponent } from './../dialog-add-user/dialog-add-user.component';
import {Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }
}
