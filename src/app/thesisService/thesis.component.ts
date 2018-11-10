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

  thesisDetails(thesis: Thesis): void {
    this.router.navigate(['thesis/details', thesis.id]);
  }

  prepareDatepicker() {
    const start = 1900;
    const end = new Date().getFullYear();
    let options = '';
    for (let year = start; year <= end; year++) {
      options += '<option>' + year + '</option>';
    }
    document.getElementById('dateFrom').innerHTML = options;
    document.getElementById('dateTo').innerHTML = options;
  }
}
