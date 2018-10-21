import { Component, OnInit } from '@angular/core';
import { Thesis } from './thesis';
import { ThesisService } from './thesis.service';
import {Router} from '@angular/router';
import {ThesisDetails} from './thesisDetails';
import {ThesisFilters} from './thesisFilters';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.css']
})
export class ThesisComponent implements OnInit {

  theses: Thesis[];
  thesisFilters: ThesisFilters;

  constructor(private thesisService: ThesisService, private router: Router) { }

  ngOnInit() {
    this.thesisService.getTheses()
      .subscribe(theses => this.theses = theses);

    this.thesisFilters = new ThesisFilters();

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

  filterTheses(): void {
    this.thesisFilters.author = (<HTMLInputElement>document.getElementById('authorSearch')).value;
    this.thesisFilters.title = (<HTMLInputElement>document.getElementById('titleSearch')).value;
    this.thesisFilters.positionFrom = Number((<HTMLInputElement>document.getElementById('positionFrom')).value);
    this.thesisFilters.positionTo = Number((<HTMLInputElement>document.getElementById('positionTo')).value);
    this.thesisFilters.institution = (<HTMLInputElement>document.getElementById('institution')).value;
    this.thesisFilters.keyWords = (<HTMLInputElement>document.getElementById('keyWords')).value;
    this.thesisFilters.quotationNumber = Number((<HTMLInputElement>document.getElementById('quotationNumber')).value);
    this.thesisFilters.dateFrom = new Date((<HTMLInputElement>document.getElementById('dateFrom')).value);
    this.thesisFilters.dateTo = new Date((<HTMLInputElement>document.getElementById('dateTo')).value);

    this.thesisService.getThesesWithFilters(this.thesisFilters).subscribe(theses => this.theses = theses);
  }

  thesisDetails(id: number): void {
    this.thesisService.setThesisId(id);
    this.router.navigate(['thesis/details']);
  }

}
