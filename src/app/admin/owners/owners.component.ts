import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {UpdateOwnerComponent} from '../update-owner/update-owner.component'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent {

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'phone',
    'gender',
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
    const dialogRef = this.dialog.open(UpdateOwnerComponent)
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getHotelList();
        }
      }
    })
  }

  getHotelList() {
    this.service.getOwnerList().subscribe({
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
    this.service.deleteOwner(id).subscribe({
      next: (res) => {
        this.toastr.success("Hotel Deleted !!");
        this.getHotelList();
      },
      error: console.log,
    })
  }

  openHotelForm(data: any) {
    const dialogRef = this.dialog.open(UpdateOwnerComponent, {
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
