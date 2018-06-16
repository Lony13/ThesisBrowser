import { Component, OnInit } from '@angular/core';
import { Thesis } from './thesis';
import { ThesisService } from './thesis.service';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.css']
})
export class ThesisComponent implements OnInit {
  thesesList = [
    { id: 1, title: 'Thesis First', author: 'Mr. Nice', link: 'http://www.google.com' },
    { id: 1, title: 'Thesis Second', author: 'Mr. Best', link: 'link do pracy' },
    { id: 1, title: 'Thesis Third', author: 'Mr. Falisz', link: 'link do pracy' },
    { id: 1, title: 'Thesis Fourth', author: 'Mr. Test', link: 'link do pracy' },
    { id: 1, title: 'Thesis Fifth', author: 'Mr. Gone', link: 'link do pracy' },
    { id: 1, title: 'Thesis Sixth', author: 'Mr. Bad', link: 'link do pracy' }
  ];

  theses: Thesis[];

  constructor(private thesisService: ThesisService) { }

  ngOnInit() {
    this.theses = this.thesesList;
    const buttonLoadTheses = document.getElementById('buttonLoadTheses');
    const buttonGetByAuthor = document.getElementById('buttonGetByAuthor');
    const buttonGetByTitle = document.getElementById('buttonGetByTitle');

    buttonLoadTheses.addEventListener('click', () => {
      this.thesisService.getTheses()
        .subscribe(theses => this.theses = theses);
      clearSearchBoxes();
    });
    buttonGetByAuthor.addEventListener('click', () => {
      const author = document.getElementById('authorSearch').value;
      this.thesisService.getThesesByAuthor(author)
        .subscribe(theses => this.theses = theses);
    });
    buttonGetByTitle.addEventListener('click', () => {
      const title = document.getElementById('titleSearch').value;
      this.thesisService.getThesesByTitle(title)
        .subscribe(theses => this.theses = theses);
    });

    function clearSearchBoxes() {
      document.getElementById('authorSearch').value = '';
      document.getElementById('titleSearch').value = '';
    }
  }
}
