import { Component, OnInit } from '@angular/core';
import { CandidateServiceService } from '../services/candidate-service.service';
import { Router } from '@angular/router';
import { Detail } from '../shared/detail';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-edit-delete',
  templateUrl: './edit-delete.component.html',
  styleUrls: ['./edit-delete.component.css']
})
export class EditDeleteComponent implements OnInit {
  d:Detail=new Detail();
  public members: any[] = [{
    id:0,
    sub: '',
    points:'',
    
  }]
  constructor(private _voteService:CandidateServiceService, private _router:Router) { }
flag=1;
  ngOnInit(): void {
  }
  // searchForm(form)
  // {
  //   console.log(form.value.flatNo);
  //   localStorage.setItem("code","1234");
  //   if(this.flag==1)
  //   {
  //     this.flag=2;
  //   }
  // }

  // fetch(form)
  // {
  //   if(form.value.code==localStorage.getItem("code"))
  //   {
  //   this.flag1=1;
  //   console.log("hii");
  //   this.user=JSON.parse(localStorage.getItem("detail"));
  //   console.log(this.user.famName)
  //   this.flag=3;
  //   }
  //   else
  //   this.flag1=2;

  // }
  loginAdmin(form)
  {
    this._voteService.getAdmin();
    if(form.value.adminNo==localStorage.getItem("adminId") && form.value.adminPass==localStorage.getItem("adminPass"))
    {
      this._voteService.getUserById(form.value.candId).subscribe((data)=> {
      if(data==null)
      {
        alert("No candidate of such Id exists");
      console.log("No candidate of such Id exists");
      }
      else
      {
        this.d=data;
        this.flag=2;
      }

      });
    }
    else
    alert("Invalid Admin Details");
  }
  // removeMembers(i: number) {
  //   alert("Are you sure, you want to remove member?")
  //   this.user.members.splice(i, 1);
  //   localStorage.removeItem("detail");
  // localStorage.setItem("detail",JSON.stringify(this.user));
  // console.log(this.user);

    
  // }
  // addMembers() {
  //   this.user.members.push({
  //     id: this.user.members.length + 1,
  //     name: '',
  //     gender: '',
  //     age: '',
  //     relation: ''
  //   });
  removeSkills(i: number) {
    alert("Are you sure, you want to remove skill?")
    this.d.key.splice(i, 1);
    console.log("Removed skill");
    console.log(this.d);  
  }
  addSkills() {
      this.d.key.push({
        id: this.d.key.length + 1,
        sub:'',
        points:''
      });
      
  }
//   onSubmit()
//   {
//   console.log("welcome");
//   console.log(this.d);
//   localStorage.removeItem("detail");
//      localStorage.setItem("detail",JSON.stringify(this.d));
//      alert("Detail entered!")
    
//      this._voteService.createCandidate(this.d).subscribe(data=> console.log(data));
//      this.router.navigate(['']);
//   }

 
// }
edit()
{ alert("edit?")
console.log("edited to:")
console.log(this.d);
 this._voteService.editCandidate(this.d).subscribe((data)=>console.log(data));
  

}
delete()
{
  alert("Are you sure , want to delete?");
  console.log("Deleting...");
  console.log(this.d);
 this._voteService.deleteCandidate(this.d);
}

}
