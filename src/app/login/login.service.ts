import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  getLog(id: number) {
    return this.getLogs()
    .pipe(
      map(auth => {
        return auth.filter(auth => auth.id === id)[0]
      })
    )
    
  }
  loginUser(user: any){
    return this.post(this.getLogs(),user)
  }
  post(arg0: Observable<{ id: number; email: string; password: string; }[]>, user: any) {
    throw new Error('Method not implemented.');
  }
  getLogs() {
    return of([
      {
        "id": 0,
       "email":"mihika@gmail.com",
       "password":"mihika123",
      },
      {
        "id": 1,
        "email":"neha@gmail.com",
       "password":"neha123",
      },
      {
        "id": 3,
        "email":"mehak@gmail.com",
       "password":"mehak123",
      },
      {
        "id": 4,
        "email":"rohan@gmail.com",
        "password":"rohan123",
      },
    ])
      
  }
  
  }

