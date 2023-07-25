import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';


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

  saveUser() {

    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is: ', this.user);
    this.loading = true;

    const userObject = this.user.toPlainObject();

    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, userObject)
    .then(() => {
      this.loading = false;
      console.log('Data saved sucessfully');
    })
    .catch((err) => {
      console.log(err);
    }) 

  }
 
}
