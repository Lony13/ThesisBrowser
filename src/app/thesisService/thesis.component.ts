import { Component, OnInit } from '@angular/core';
import { Thesis } from '../model/thesis';
import { ThesisService } from './thesis.service';
import {Router} from '@angular/router';
import {ThesisFilters} from '../model/thesisFilters';

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
      .subscribe(theses => {
        this.theses = theses;
        console.log(theses);
      });

    this.thesisFilters = new ThesisFilters();
  }

  filterTheses(): void {
    console.log(this.thesisFilters.author);
    this.thesisService.getThesesWithFilters(this.thesisFilters).subscribe(theses => this.theses = theses);
  }

  thesisDetails(id: number): void {
    this.thesisService.setThesisId(id);
    this.router.navigate(['thesis/details']);
  }

}
