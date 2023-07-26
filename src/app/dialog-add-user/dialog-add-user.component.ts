import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


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

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: Firestore) {}

  saveUser() {

    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is: ', this.user);
    this.loading = true;

    const collectionInstance = collection(this.firestore, 'users'); 
    addDoc(collectionInstance, this.user.toJSON())
    .then(() => {
      this.loading = false;
      console.log('Data saved sucessfully');
      this.dialogRef.close();
    })
    .catch((err) => {
      console.log(err);
    }) 

  }
 
}
