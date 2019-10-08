import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './dashboard/side-nav/side-nav.component';
import { ToolbarComponent } from './dashboard/toolbar/toolbar.component';
import { UsersComponent } from './dashboard/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import {
   MatToolbarModule,
   MatIconModule,
   MatSidenavModule,
   MatListModule,
   MatButtonModule,
   MatCardModule,
   MatFormFieldModule,
   MatSelectModule,
   MatDialogModule,
   MatTableModule,
   MatInputModule
 }
from  '@angular/material';
import { AddUserComponent } from './dashboard/users/add-user/add-user.component';
const appRoutes: Routes = [
  { path: '',           component:HomeComponent},
  { path: 'users',      component:UsersComponent,
    children: [
        { path:'addusers', component:AddUserComponent },
      ],
      runGuardsAndResolvers:'always'

    }

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideNavComponent,
    ToolbarComponent,
    UsersComponent,
    HomeComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
