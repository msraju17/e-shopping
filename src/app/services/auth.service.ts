import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private validUser: boolean = false;
  constructor() { }

  getValid(){
    return this.validUser;
  }

  set(input){
    this.validUser = input;
  }
}
