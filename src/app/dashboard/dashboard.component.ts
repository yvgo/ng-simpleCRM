import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from '../services/news.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { User } from 'src/models/user.class';
import { UserDataService } from '../services/user-data.service';
import { Firestore, collectionData, collection, getFirestore, doc, getDoc  } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public sources:any = [];
  public articles:any = [];

  user = new User(); 
  allUsers = [];
  allUsers$: Observable<any>;

  constructor(
    private common : CommonModule, 
    private newsApi : NewsService, 
    private list : MatListModule, 
    private fb: FormBuilder, 
    private firestore: Firestore,
    private userS: UserDataService) { 
      this.allUsers$ = this.userS.getUserDateOrderByBirthDate();
    }
  
  ngOnInit(): void {
    this.newsApi.initArticles()
    .subscribe((res:any) => {
      //console.log(res);
      this.articles = res.articles;
    });
    /* this.newsApi.initSources()
    .subscribe((res:any) => {
      console.log(res);
      this.sources = res.sources;
    }); */
    
  } 
  
}
