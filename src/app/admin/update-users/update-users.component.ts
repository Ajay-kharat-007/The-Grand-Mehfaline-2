import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service'

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.scss']
})
export class UpdateUsersComponent {

  hotelForm: FormGroup;
  
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private toastr : ToastrService,
    private dialog: MatDialogRef<UpdateUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    
  ){
    this.hotelForm = this.builder.group({
      id : '',
      firstname : '',
      lastname : '',
      phone : '',
      email : '',
      gender : '',
      password : ''
    })
  }

  ngOnInit(): void {
    this.hotelForm.patchValue(this.data)
  }

  hotelRegistr(){
    if(this.hotelForm.valid) {
      if(this.data){
        this.service.updateUser(this.data.id, this.hotelForm.value).subscribe({
          next: (val:any) => {
            this.toastr.success('Hotel Detail Updated Successfully !!');
            this.dialog.close(true);
  
          },
          error: (err:any)=>{
            this.toastr.error("some error occurred")
          }
        })
      }else {
        console.log(this.hotelForm.value)
      this.service.registerUser(this.hotelForm.value).subscribe({
        next: (val:any) => {
          this.toastr.success('Hotel Registration Successfull', "Congratulations!!");
          this.dialog.close(true);

        },
        error: (err:any)=>{
          this.toastr.error("some error occurred")
        }
      })
      }
    }
      
  }

  closeDialog(){
    this.dialog.close();
  }

}
