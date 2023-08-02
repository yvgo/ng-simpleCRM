import { DialogEditComponent } from './../dialog-edit/dialog-edit.component';
import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  userID: any = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog, ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userID = paramMap.get('id');
      console.log('got ID', this.userID);
      this.getUser();
    })
  }

  getUser() {
    const collectionInstance = collection(this.firestore, 'users'); 
    const docInstance = doc(collectionInstance, this.userID);
    //addDoc(collectionInstance, this.userID)
    docData(docInstance)
    .subscribe((user: any) => {
      this.user = new User(user);
      console.log('received changes from DB', user);
    });
  }

  openChangeDialog() {
    const dialog = this.dialog.open(DialogEditComponent);
    dialog.componentInstance.user = this.user;
  }

  openDeleteDialog() {

  }

}
