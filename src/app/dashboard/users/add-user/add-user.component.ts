import { Component, ViewChild, ElementRef,} from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  users:{name:string,id:number,role:string}[]=[];


    @ViewChild('name') name: ElementRef;
    @ViewChild('id') id: ElementRef;
    @ViewChild('role') role: ElementRef;


    constructor(
      private usersService:UsersService,
      private _dialogRef: MatDialogRef<AddUserComponent>,

      ){  }

    ngOnInit(): void {
      this.users = this.usersService.users;
    }
    onCreateUser(){
      console.log('arrays:',this.name.nativeElement.value,this.id.nativeElement.value,this.role.nativeElement.value)
      this.usersService.addUser(this.name.nativeElement.value,this.id.nativeElement.value,this.role.nativeElement.value);
      this.close();
    }
    close () {
      this._dialogRef.close();
    }

  }
