import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(){
    console.log('i am checkin to see if u r logged in');
    return true;
  }

}