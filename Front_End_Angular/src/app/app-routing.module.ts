import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookDetailsComponent } from "./components/book-details/book-details.component";
import { BooksDashboardComponent } from "./components/books-dashboard/books-dashboard.component";

const routes: Routes = [
  { path: "bookDetails/:id", component: BookDetailsComponent },
  { path: "dashboard", component: BooksDashboardComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
