import { Component, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
//import { Observable } from 'rxjs';
//import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  //user: User = new User(); // Variable - Typ - Instanz
  user = new User(); // Kurzschreibweise
  birthDate!: Date;
  loading = false;

  constructor(private firestore: Firestore) {}

  /* constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {
    const aCollection = collection(this.firestore, 'items')
    this.items$ = collectionData(aCollection);
  } */

  saveUser() {

    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is: ', this.user);
    this.loading = true;

    const userObject = this.user.toPlainObject();

    this.firestore.collection('users').add(userObject)
    .then((result:any) => {
      //this.loading = false;
      console.log('adding user finished ', result);
      //this.dialogRef.close();
    })
    .catch((error: any) => {
      console.error(error);
    });

    /* const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, this.user)
    .then(() => {
      console.log('Data saved sucessfully');
    })
    .catch((err) => {
      console.log(err);
    }) */

    /* this.firestore
    .collection('users')
    .add(this.user)
    .then((result:any) => {
      this.loading = false;
      console.log('adding user finished ', result);
      this.dialogRef.close();
    }); */

  }
 
}
