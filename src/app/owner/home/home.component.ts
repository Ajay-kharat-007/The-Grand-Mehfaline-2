import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotelRegisterComponent } from '../hotel-register/hotel-register.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'menu',
    'discription',
    'address',
    'arooms',
    'workers',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private service: AuthService,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.getHotelList();
  }

  hotelRegister() {
    const dialogRef = this.dialog.open(HotelRegisterComponent)
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getHotelList();
        }
      }
    })
  }

  getHotelList(){
    this.service.getHotelList().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(res)
      },
      error: console.log,
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteHotel(id: number) {
    this.service.deleteHotel(id).subscribe({
      next: (res) => {
        this.toastr.error("Hotel Deleted !!");
        this.getHotelList();
      },
      error: console.log,
    })
  }

  openHotelForm(data: any) {
    const dialogRef = this.dialog.open(HotelRegisterComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getHotelList();
        }
      }
    })
  }

}
