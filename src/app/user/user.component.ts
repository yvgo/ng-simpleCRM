import { DialogAddUserComponent } from './../dialog-add-user/dialog-add-user.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  //user: User = new User(); // Variable - Typ - Instanz
  user = new User(); // Kurzschreibweise

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }
}
