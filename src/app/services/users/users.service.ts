import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


// Adding collection of employees to the service
export class UsersService {
  users: Array<object> = [  // Add employee object
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      contract: 'full-time'
    },
    {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      contract: 'full-time'
    },
    {
      id: '3',
      name: 'Jim',
      role: 'Developer',
      contract: 'full-time'
    },
    {
      id: '4',
      name: 'Adam',
      role: 'Designer',
      contract: 'part-time'
    }
  ];

  // implementing all() method
  all(): Observable<Array<object>> {
    return of(this.users);
  }

  findOne(id: string): Observable<object> {
    const user = this.users.find((u: any) => {
      return u.id === id;
    });
    return of(user);
  }

  findFullTime(contract: string): Observable<Array<object>> {
    const users = this.users.find((users: any) => {
      return users.contract === contract;
    })
    return of(this.users);
  }
  
  constructor() { }
}
