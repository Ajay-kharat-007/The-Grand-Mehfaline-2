import { Component, Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  hotels: any;

  bookForm!: FormGroup;

  constructor(
    private service: AuthService,
    private builder: FormBuilder,
    private dialog: MatDialog,
    private toastr: ToastrService,
  ) {
    this.service.getHotel().subscribe((res) => {
      console.log(res)
      this.hotels = res

      this.bookForm = this.builder.group({

      })
    })
  }

  openBookingform(){
    const dialogRef = this.dialog.open(BookingFormComponent);

  }


}
