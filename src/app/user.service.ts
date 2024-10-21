import { Injectable } from '@angular/core';
import { firstValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUser(id: number) {
    let user: {firstName: string, email: string, age: number};
    if (id === 1) {
        user = {firstName: 'Bob 1', email: 'bob@bobmail.com', age: 25}
    } else if (id === 2) {
        user = {firstName: 'Bob 2', email: 'robert@bobmail.com', age: 27}
    }  else {
        user = {firstName: `Bob ${id}`, email: 'boby@gmail.com', age: 22}
    }
    return firstValueFrom(of(user))
  }
}
