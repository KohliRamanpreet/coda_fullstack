import { Component, OnInit } from '@angular/core';
import { Detail } from '../shared/detail';
import { Router } from '@angular/router';
import { CandidateServiceService } from '../services/candidate-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuickviewComponent } from '../quickview/quickview.component';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
public details:Detail[];
public d=8;

  constructor(private router:Router, private _candidateService:CandidateServiceService, private modalService: NgbModal) {
  }
  ngOnInit(): void {
    this._candidateService.getUser().subscribe(data=>{this.details=data; console.log(this.details) });
    
 }
 openDish(id): void {
  this. _candidateService.candidateId = id;
  this.modalService.open(QuickviewComponent, {
    centered: true,
    keyboard: true,
  });
}
voteModal(d)
{
 
  console.log(d);
  this._candidateService.updateCandidate(d).subscribe((data)=>console.log(data));
}

}
