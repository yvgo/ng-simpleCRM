import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { User } from 'src/models/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private firestore: Firestore) { }

  // Nach Datum sortieren
  public getUserDateOrderByBirthDate() {
    const collectionInstance = collection(this.firestore, 'users');
    const queryColl = query(collectionInstance, orderBy('birthDate', 'desc'));
    
    return collectionData(queryColl ,{idField: 'customIDName'})
  }

  // Nach Name sortieren
  public getUserDate() {
    const collectionInstance = collection(this.firestore, 'users');
    return collectionData(collectionInstance ,{idField: 'customIDName'})
  }

}
