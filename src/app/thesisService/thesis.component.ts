import {Component, OnInit} from '@angular/core';
import {Thesis} from '../model/thesis';
import {ThesisService} from './thesis.service';
import {Router} from '@angular/router';
import {ThesisFilters} from '../model/thesisFilters';
import {ThesisDetails} from '../model/thesisDetails';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.css']
})
export class ThesisComponent implements OnInit {

  thesisFilters: ThesisFilters;
  theses: ThesisDetails[];

  constructor(private thesisService: ThesisService, private router: Router) {
  }

  ngOnInit() {
    this.thesisService.getTheses()
      .subscribe(theses => {
        this.thesisService.theses = theses;
        this.theses = this.thesisService.theses;
      });

    this.thesisFilters = new ThesisFilters();

    this.prepareDatepicker();
  }

  filterTheses(): void {
    this.thesisService.getThesesWithFilters(this.thesisFilters).subscribe(theses => {
      this.thesisService.theses = theses;
      this.theses = theses;
    });
  }

  relatedTheses(): void {
    this.thesisService.getRelatedTheses(this.thesisFilters)
      .subscribe(theses => {
        this.theses = theses;
        this.thesisService.theses = theses;
      });
  }

  updateValue(id: any) {
    const idName = 'check' + id;
    if (this.thesisFilters.exemplaryTheses === undefined) {
      this.thesisFilters.exemplaryTheses = [];
    }
    if ((<HTMLInputElement>document.getElementById(idName)).checked) {
      this.thesisFilters.exemplaryTheses.push(id);
    } else {
      this.thesisFilters.exemplaryTheses = this.thesisFilters.exemplaryTheses.filter(value => value !== id);
    }
  }


  thesisDetails(thesis: Thesis): void {
    this.router.navigate(['thesis/details', thesis.id]);
  }

  prepareDatepicker() {
    const start = new Date().getFullYear();
    const end = 1900;
    let options = '';
    for (let year = start; year >= end; year--) {
      options += '<option>' + year + '</option>';
    }
    const optionsFrom = '<option value="" disabled selected>Date from</option>' + options;
    const optionsTo = '<option value="" disabled selected>Date to</option>' + options;
    document.getElementById('dateFrom').innerHTML = optionsFrom;
    document.getElementById('dateTo').innerHTML = optionsTo;
  }
}
