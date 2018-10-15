import { Component, OnInit } from '@angular/core';
import { Thesis } from './thesis';
import { ThesisService } from './thesis.service';
import {Router} from '@angular/router';
import {ThesisDetails} from './thesisDetails';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.css']
})
export class ThesisComponent implements OnInit {

  theses: Thesis[];

  constructor(private thesisService: ThesisService, private router: Router) { }

  ngOnInit() {
    this.thesisService.getTheses()
      .subscribe(theses => this.theses = theses);

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

  thesisDetails(id: number): void {
    this.thesisService.setThesisId(id);
    this.router.navigate(['thesis/details']);
  }

}
