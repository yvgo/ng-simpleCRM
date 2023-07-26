import { DialogAddUserComponent } from './../dialog-add-user/dialog-add-user.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { MatTable } from '@angular/material/table';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user = new User(); 
  allUsers = [];

  constructor(public dialog: MatDialog, private firestore: Firestore) {}

  ngOnInit(): void {
    
    collection(this.firestore, 'users')
    /* .valueChanges()
    .subscribe((changes: any) => {
      console.log('received changes from DB', changes);
      this.allUsers = changes;
    }) */;
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }
}
