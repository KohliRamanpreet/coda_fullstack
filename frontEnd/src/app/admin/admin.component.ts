import { Component, OnInit } from '@angular/core';
import { Detail } from '../shared/detail';
import { Interests} from '../shared/interests';
import { Router } from '@angular/router';
import { CandidateServiceService } from '../services/candidate-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
public flag=1;
d:Detail=new Detail();
public members: any[] = [{
  id:0,
  sub: '',
  points:'',
  
}]
d1:Interests[];
  constructor(private router:Router, private _voteService:CandidateServiceService) { }

  ngOnInit(): void {
  }
  loginAdmin(form)
  {
    this._voteService.getAdmin();
    if(form.value.adminNo==localStorage.getItem("adminId") && form.value.adminPass==localStorage.getItem("adminPass"))
    this.flag=2;
    console.log(this.flag);
  }
  removeSkills(i: number) {
    this.members.splice(i, 1);
  }
  addSkills() {
      this.members.push({
        id: this.members.length + 1,
        sub:'',
        points:''
      });
  
    this.d.key=this.members;
  }
  onSubmit()
  {
  console.log("welcome");
  console.log(this.d);
  localStorage.removeItem("detail");
     localStorage.setItem("detail",JSON.stringify(this.d));
     alert("Detail entered!")
    
     this._voteService.createCandidate(this.d).subscribe(data=> console.log(data));
     this.router.navigate(['']);
  }


}

