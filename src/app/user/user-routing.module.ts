import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/user-home.component';
import { UserTicketsComponent } from './user-tickets/user-tickets.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { MainComponentComponent } from './main-component/main-component.component';

const routes: Routes = [
  { path: 'main', component: MainComponentComponent },
  { path: 'home', component: UserHomeComponent },
  { path: 'my-tickets', component: UserTicketsComponent },
  { path: 'raise-ticket', component: NewTicketComponent },
  { path: 'ticket-details', component: TicketDetailsComponent },
  // { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
