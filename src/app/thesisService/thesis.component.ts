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

        this.thesisService.theses[0].thesisId = 0;
        this.thesisService.theses[1].thesisId = 1;
        this.thesisService.theses[2].thesisId = 2;
        this.thesisService.theses[3].thesisId = 3;
        this.thesisService.theses[4].thesisId = 4;

        this.theses = this.thesisService.theses;
      });

    this.thesisFilters = new ThesisFilters();
  }

  filterTheses(): void {
    console.log(this.thesisFilters.author);
    this.thesisService.getThesesWithFilters(this.thesisFilters).subscribe(theses => this.thesisService.theses = theses);
  }

  thesisDetails(thesis: Thesis): void {
    this.router.navigate(['thesis/details', thesis.thesisId]);
  }

}
