import { Component, OnInit } from '@angular/core';
import { Thesis } from './thesis';
import { ThesisService } from './thesis.service';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.css']
})
export class ThesisComponent implements OnInit {
  theses: Thesis[];

  constructor(private thesisService: ThesisService) { }

  ngOnInit() {
    this.thesisService.getTheses()
      .subscribe(theses => this.theses = theses);
    const buttonLoadTheses = document.getElementById('buttonLoadTheses');
    const buttonGetByAuthor = document.getElementById('buttonGetByAuthor');
    const buttonGetByTitle = document.getElementById('buttonGetByTitle');

    buttonLoadTheses.addEventListener('click', () => {
      this.thesisService.getTheses()
        .subscribe(theses => this.theses = theses);
      clearSearchBoxes();
    });
    buttonGetByAuthor.addEventListener('click', () => {
      const author = (<HTMLInputElement> document.getElementById('authorSearch')).value;
      this.thesisService.getThesesByAuthor(author)
        .subscribe(theses => this.theses = theses);
      (<HTMLInputElement>document.getElementById('titleSearch')).value = '';
    });
    buttonGetByTitle.addEventListener('click', () => {
      const title = (<HTMLInputElement>document.getElementById('titleSearch')).value;
      this.thesisService.getThesesByTitle(title)
        .subscribe(theses => this.theses = theses);
      (<HTMLInputElement>document.getElementById('authorSearch')).value = '';
    });

    function clearSearchBoxes() {
      (<HTMLInputElement>document.getElementById('authorSearch')).value = '';
      (<HTMLInputElement>document.getElementById('titleSearch')).value = '';
    }
  }
}
