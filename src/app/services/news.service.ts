import { initialArticles } from '../../models/article.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  API_KEY: string = '7d8d20d8026046a3972539be4ad954da';
  url: string = 'http://newsapi.org/v2/everything?qInTitle=';
  params: string = '&inflation&from=2023-07-02&sortBy=relevancy&apiKey=' //REPLACE YYYY-MM-DD WITH VALID DATE WITHIN ONE MONTH OF RUNNING APP
  //params: string = '&inflation&from=YYYY-MM-DD&sortBy=relevancy&apiKey=' //REPLACE YYYY-MM-DD WITH VALID DATE WITHIN ONE MONTH OF RUNNING APP
  
  constructor(private http: HttpClient) { }

  getArticlesByID(source : string) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.API_KEY);
  }

  initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.API_KEY);
  }
}
