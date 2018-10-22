import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ThesisDetails} from '../model/thesisDetails';
import {ThesisService} from '../thesisService/thesis.service';

@Component({
  selector: 'app-thesis-details',
  templateUrl: './thesis-details.component.html',
  styleUrls: ['./thesis-details.component.css']
})
export class ThesisDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private thesisService: ThesisService) { }

  thesisId: number;
  thesisDetails: ThesisDetails;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.thesisId = id != null ? id : this.thesisId;
    this.thesisService.getThesisDetailsById(id)
      .subscribe(details => this.thesisDetails = details);
  }

}
