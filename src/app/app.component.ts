import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	articles: Article[];

	constructor() {
		this.articles = [
			new Article("Angular 2", "http://angular.io", 3),
			new Article("Stackoverflow", "http://stackoverflow.com", 20),
			new Article("Github", "http://github.com", 10),
		];
	}

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
  	this.articles.push(new Article(title.value, link.value, 0));
  	title.value = null;
  	link.value = null;
    return false;
  }

  sortedArticles(): Article[]{
  	return this.articles.sort(
  		(a: Article, b: Article) => b.votes - a.votes
  	);
  }

}
