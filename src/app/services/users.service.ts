import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [
   {
     name:'xxx',
     id:0,
     role:'enduser'
   },
   {
     name:'yyy',
     id:1,
     role:'dealer'
   },
   {
     name:'zzz',
     id:2,
     role:'enduser'
   },
   {
     name:'aaa',
     id:3,
     role:'admin'
   },
   {
     name:'bbb',
     id:4,
     role:'enduser'
   },
 ];


 addUser(name:string,id:number,role:string){
   console.log('Value',name,id,role);

   this.users.push({name:name,id:id,role:role});

   console.log('users',this.users);

  // this.usersArray.next(this.users);

 }
}
