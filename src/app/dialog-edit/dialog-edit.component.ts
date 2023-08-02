import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent {

  //user: User = new User(); // Variable - Typ - Instanz
  user: User = new User(); // Kurzschreibweise
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditComponent>, private firestore: Firestore) {}

  saveUser() {

  

  }
 

}
