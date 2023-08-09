import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  public sources:any = [];
  public articles:any = [];

  constructor(private newsApi : NewsService, private fb: FormBuilder) { }
  
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
