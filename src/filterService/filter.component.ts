import { Component, OnInit } from '@angular/core';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private filterService: FilterService) { }

  ngOnInit() { }

  // searchByAuthor (event: any) {
  //   let input, filter, ul, li;
  //   input = document.getElementById('authorSearch');
  //   filter = input.value.toUpperCase();
  //   ul = document.getElementById('thesisTable');
  //   li = ul.getElementsByTagName('tr');
  //
  //   const authorsList = [];
  //   for (const thesis of li) {
  //     for (const author of thesis.childNodes) {
  //       if (author.id === 'author' && author.innerText.toUpperCase().includes(filter)) {
  //         authorsList.push(author.innerText);
  //       }
  //     }
  //   }
  //   console.log(authorsList);
  // }
  //
  // searchByTitle (event: any) {
  //   let input, filter, ul, li;
  //   input = document.getElementById('titleSearch');
  //   filter = input.value.toUpperCase();
  //   ul = document.getElementById('thesisTable');
  //   li = ul.getElementsByTagName('tr');
  //
  //   const titlesList = [];
  //   for (let thesis of li) {
  //     for (let title of thesis.childNodes) {
  //       if (title.id === 'title' && title.innerText.toUpperCase().includes(filter)) {
  //         titlesList.push(title.innerText);
  //       }
  //     }
  //   }
  //   console.log(titlesList);
  // }
}
