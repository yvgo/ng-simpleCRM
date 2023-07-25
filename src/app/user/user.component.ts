import { DialogAddUserComponent } from './../dialog-add-user/dialog-add-user.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
//import { Firestore, collection } from '@angular/fire/firestore';
//import { Firestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  //user: User = new User(); // Variable - Typ - Instanz
  user = new User(); // Kurzschreibweise

  //constructor(public dialog: MatDialog, private firestore: Firestore) {}
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    /* const userObject = this.user.toPlainObject();
    const collectionInstance: AngularFirestoreCollection<any> = this.firestore.collection('users');
  

    collectionInstance.valueChanges().subscribe((changes: any) => {
      console.log('received changes from DB', changes);
    }); */

    /* this.firestore
    .collection(userObject)
    .valueChange
    .subscribe((changes: any) => {
      console.log('received chages form DB', changes);
    }); */  
    
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }
}
