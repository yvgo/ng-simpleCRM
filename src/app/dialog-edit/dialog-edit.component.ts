import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { update } from '@angular/fire/database';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent {

  //user: User = new User(); // Variable - Typ - Instanz
  user: User = new User(); // Kurzschreibweise
  userID: any = '';
  birthDate!: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditComponent>, private firestore: Firestore) { }

  saveUser() {
    this.loading = true;
    const collectionInstance = collection(this.firestore, 'users');
    const docInstance = doc(collectionInstance, this.userID);
    updateDoc(docInstance, this.user.toJSON())
      .then(() => {
        //debugger
        this.loading = false;
        this.dialogRef.close();
      })
  }

  deleteUser() {
    this.loading = true;
    const collectionInstance = collection(this.firestore, 'users');
    const docInstance = doc(collectionInstance, this.userID);
    deleteDoc(docInstance)
      .then(() => {
        //debugger
        this.loading = false;
        this.dialogRef.close();
      })
  }

}
