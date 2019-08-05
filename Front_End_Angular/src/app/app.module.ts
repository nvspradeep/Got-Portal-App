import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BooksDashboardComponent } from "./components/books-dashboard/books-dashboard.component";
import { BookService } from "./services/book-service.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BookDetailsComponent } from "./components/book-details/book-details.component";
import { CommonModule } from "@angular/common";
import { ReviewService } from "./services/review-service.service";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { MaterialModules } from './material.module';
import { ImageService } from './image.service';
@NgModule({
  declarations: [AppComponent, BooksDashboardComponent, BookDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModules,
    MDBBootstrapModule.forRoot()
  ],
  providers: [BookService, ReviewService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
