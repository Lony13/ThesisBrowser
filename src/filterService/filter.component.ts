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

  searchByAuthor (event: any) {
    let input, filter, ul, li, a, i;
    input = document.getElementById('authorSearch');
    filter = input.value.toUpperCase();
    ul = document.getElementById('thesisTable');
    li = ul.getElementsByTagName('td');
    console.log(filter, li);

    // for (i = 0; i < li.length; i++) {
    //   a = li[i].getElementsByTagName('')[0];
    //   if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //     li[i].style.display = '';
    //   } else {
    //     li[i].style.display = 'none';
    //
    //   }
    // }
  }

  searchByTitle (event: any) {
    console.log('title');
  }
}
