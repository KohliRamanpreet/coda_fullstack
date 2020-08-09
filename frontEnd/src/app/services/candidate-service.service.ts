import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Detail} from '../shared/detail';
import { Observable,throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CandidateServiceService {
headers= new Headers({ 'Content-Type': 'application/json' });
private options={headers:this.headers};
candidateId: Detail;
  private type;
	private userUrl= 'http://localhost:8085/api111';
  constructor(private http:HttpClient) { }
  public createCandidate(user:Object) {
    console.log("IN add function to db");
    return this.http.post<Detail>(this.userUrl+"/add", user);
  }
  getUser(): Observable<Detail[]> {
    return this.http.get<Detail[]>(this.userUrl+"/fetchDetails");
  }
  getAdmin()
  {
    localStorage.setItem("adminId","10101");
    localStorage.setItem("adminPass","abcdef");
  }
  updateCandidate(user)
  {
    return this.http.put<Detail>(this.userUrl+"/update",user);
  }
editCandidate(user)
{
  return this.http.put<Detail>(this.userUrl+"/edit",user);
}
deleteCandidate(user)
{
  return this.http.delete<Detail>(this.userUrl+"/delete",user);
}
getUserById(id):Observable<Detail> 
{
  return this.http.post<Detail>(this.userUrl+"/fetchById",id);
}
}