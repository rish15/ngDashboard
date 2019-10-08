import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material';
import { AddUserComponent } from './add-user/add-user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  reloadUsers(){
    this.router.navigate(['/users']);
    console.log("nnn");
  };
  ngOnInit(){

  }

  users:{name:string,id:number,role:string}[]=[];
    constructor(
      private usersService:UsersService,
      public dialog:MatDialog,
      private router:Router,
      ){}

    // ngOnInit(): void {
    //   this.usersService.users.subscribe(users => {
    //     this.users = users
    //     console.log('Users::',this.users);
    //   });
    // }
    openDialog(){
      let dialogRef = this.dialog.open(AddUserComponent,{data:{name:'flame'}});

      dialogRef.afterClosed().subscribe(result =>{
        console.log(`Dialog result: ${result}`);
      });

      //displaying users
    }
    displayedColumns: string[] = ['id', 'name', 'role'];
    dataSource = this.usersService.users;


  }
