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
    { id: 1, topic: 'Thesis First', author: 'Mr. Nice', link: 'http://www.google.com' },
    { id: 1, topic: 'Thesis Second', author: 'Mr. Best', link: 'link do pracy' },
    { id: 1, topic: 'Thesis Third', author: 'Mr. Falisz', link: 'link do pracy' },
    { id: 1, topic: 'Thesis Fourth', author: 'Mr. Test', link: 'link do pracy' },
    { id: 1, topic: 'Thesis Fifth', author: 'Mr. Gone', link: 'link do pracy' },
    { id: 1, topic: 'Thesis Sixth', author: 'Mr. Bad', link: 'link do pracy' }
  ];

  theses: Thesis[];

  constructor(private thesisService: ThesisService) { }

  ngOnInit() {
    const button = document.getElementById('buttonTest');
    button.addEventListener('click', () => {
      this.thesisService.getTheses()
        .subscribe(theses => this.theses = theses);
    });
  }
}
