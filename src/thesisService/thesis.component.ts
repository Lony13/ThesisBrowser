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

    // const buttonSearch = document.getElementById('buttonSearch');
    //
    // buttonSearch.addEventListener('click', () => {
    //   const author = (<HTMLInputElement> document.getElementById('authorSearch')).value;
    //   this.thesisService.getThesesWithFilters(author)
    //     .subscribe(theses => this.theses = theses);
    //   clearSearchBoxes();
    // });

    function clearSearchBoxes() {
      (<HTMLInputElement>document.getElementById('authorSearch')).value = '';
      (<HTMLInputElement>document.getElementById('titleSearch')).value = '';
      (<HTMLInputElement>document.getElementById('positionFrom')).value = '';
      (<HTMLInputElement>document.getElementById('positionTo')).value = '';
      (<HTMLInputElement>document.getElementById('institution')).value = '';
      (<HTMLInputElement>document.getElementById('keyWords')).value = '';
      (<HTMLInputElement>document.getElementById('quotationNumber')).value = '';
      (<HTMLInputElement>document.getElementById('dateFrom')).value = '';
      (<HTMLInputElement>document.getElementById('dateTo')).value = '';
    }
  }

  getTheses(): void {
    this.thesisService.getTheses().subscribe(theses => this.theses = theses);
  }

}
