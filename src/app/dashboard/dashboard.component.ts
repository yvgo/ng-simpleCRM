import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public sources:any = [];
  public articles:any = [];

  constructor(private common : CommonModule, private newsApi : NewsService, private list : MatListModule, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.newsApi.initArticles()
    .subscribe((res:any) => {
      console.log(res);
      this.articles = res.articles;
    });
    /* this.newsApi.initSources()
    .subscribe((res:any) => {
      console.log(res);
      this.sources = res.sources;
    }); */
  } 
  
}
