import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { QuickviewComponent } from './quickview/quickview.component';
import { Home2Component } from './home2/home2.component';
import { AdminComponent } from './admin/admin.component';
import { EditDeleteComponent } from './edit-delete/edit-delete.component';
import { CandidateServiceService } from './services/candidate-service.service';

@NgModule({
  declarations: [
    AppComponent,
    QuickviewComponent,
    Home2Component,
    AdminComponent,
    EditDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
   CandidateServiceService
  ],
  entryComponents: [
    QuickviewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
