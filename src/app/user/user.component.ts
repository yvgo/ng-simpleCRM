import { DialogAddUserComponent } from './../dialog-add-user/dialog-add-user.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { MatTable } from '@angular/material/table';
import { Firestore, collectionData, collection, getFirestore, doc, getDoc  } from '@angular/fire/firestore';


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
    
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance ,{idField: 'customIDName'})
    .subscribe((changes: any) => {
      console.log('received changes from DB', changes);
      this.allUsers = changes;
    });
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }

  /* getClickedUser(mail: string){

  } */
}
