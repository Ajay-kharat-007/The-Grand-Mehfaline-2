import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';


interface Food {
  value: string;
  viewValue: string;
}

interface Number {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {

  constructor(
    private builder: FormBuilder,
    private dialog: MatDialogRef<BookingFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: AuthService,
    private toastr : ToastrService,
    private router : Router
  ) { }

  foods: Food[] = [
    { value: 'net-banking', viewValue: 'Net-Banking' },
    { value: 'upi', viewValue: 'UPI' },
    { value: 'qr', viewValue: 'QR' },
  ];

  numbers: Number[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
  ];

  range = this.builder.group({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
    fullname: this.builder.control('', Validators.compose([Validators.required])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    phone: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(10)])),
    payment: this.builder.control('', Validators.required),
    guests: this.builder.control('', Validators.required),
    rooms: this.builder.control('', Validators.required),
  });

  hotelBook() {
    if (this.range.valid) {
      this.service.BookHotel(this.range.value).subscribe((res) => {
        this.toastr.success('Registered Successfully !!')
        this.dialog.close()
        this.router.navigateByUrl('/user/home')
      });
    } else {
      console.log("please enter valid data")
      this.toastr.warning("please enter valid data ")
    }
  }

}
