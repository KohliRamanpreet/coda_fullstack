import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CandidateServiceService } from '../services/candidate-service.service';
import { Detail } from '../shared/detail';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.css'],
})
export class QuickviewComponent implements OnInit {
  d:Detail=null;

  constructor(private _service: CandidateServiceService, public modalService: NgbActiveModal) {}

  ngOnInit(): void {
   this.d=this._service.candidateId;
    console.log(this.d);
    console.log(this._service.candidateId);
  }
}
