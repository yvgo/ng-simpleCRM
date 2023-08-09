import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';


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
    //console.log('Current user is: ', this.user);
    this.loading = true;

    const collectionInstance = collection(this.firestore, 'users'); 
    addDoc(collectionInstance, this.user.toJSON())
    .then((doc) => {
      //debugger
      this.loading = false;
      var theIdIWant = doc.id;
      //console.log(theIdIWant);
      this.dialogRef.close();
    })
    .catch((err) => {
      console.log('Problems with Data', err);
    }) 

  }
 
}
