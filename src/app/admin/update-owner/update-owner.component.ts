import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service'

@Component({
  selector: 'app-update-owner',
  templateUrl: './update-owner.component.html',
  styleUrls: ['./update-owner.component.scss']
})
export class UpdateOwnerComponent implements OnInit {

  hotelForm: FormGroup;
  
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private toastr : ToastrService,
    private dialog: MatDialogRef<UpdateOwnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    
  ){
    this.hotelForm = this.builder.group({
      id : '',
      name : '',
      email : '',
      phone : '',
      gender : ''
    })
  }

  ngOnInit(): void {
    this.hotelForm.patchValue(this.data)
  }

  hotelRegistr(){
    if(this.hotelForm.valid) {
      if(this.data){
        this.service.updateOwner(this.data.id, this.hotelForm.value).subscribe({
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
      this.service.registerOwner(this.hotelForm.value).subscribe({
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
