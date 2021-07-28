import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EditTicketComponent } from '../edit-ticket/edit-ticket.component';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {

  displayedColumns: string[] = ['ticketId', 'title', 'description', 'status', 'approved', 'estimated', 'raisedBy', 'assignedTo', 'edit'];

  dataSource!: MatTableDataSource<any>;
  constructor(private firestore: AngularFirestore,
    public dialog: MatDialog) { }
  ngOnInit() {
    this.firestore.collection("tickets").valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(EditTicketComponent, {
      width: '350px',
      data: data
    });
  }

}
