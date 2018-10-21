import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ThesisService} from '../../thesisService/thesis.service';
import {ThesisDetails} from '../model/thesisDetails';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-thesis-details',
  templateUrl: './thesis-details.component.html',
  styleUrls: ['./thesis-details.component.css']
})
export class ThesisDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private thesisService: ThesisService) { }

  thesisDetails: ThesisDetails;
  thesisDetailsObservable: Observable<ThesisDetails>;

  ngOnInit() {
    this.thesisDetailsObservable = this.thesisService.getThesisDetailsById(this.thesisService.thesisId);
    this.thesisDetailsObservable.subscribe(value => this.thesisDetails = value);
    console.log(this.thesisDetails);
  }

}
