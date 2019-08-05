import { Component, OnInit, ViewChild } from "@angular/core";
import { book } from "src/app/model/book.model";
import { BookService } from "src/app/services/book-service.service";
import { MatSort, MatTableDataSource } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ImageService } from "src/app/image.service";
import "bootstrap";

@Component({
  selector: "app-books-dashboard",
  templateUrl: "./books-dashboard.component.html",
  styleUrls: ["./books-dashboard.component.css"]
})
export class BooksDashboardComponent implements OnInit {
  books: book[] = [];
  dataSource;
  headElements = ["id", "name", "No. of pages", "No. of Characters"];
  displayedColumns: string[] = ["id"];
  slides: any = [[]];
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.loadBooks();
  }
  loadBooks() {
    this.bookService.getAllBooks().subscribe(
      (books_fromapi: book[]) => {
        books_fromapi.forEach(book => {
          book.id = parseInt(
            book.url.slice(book.url.lastIndexOf("/") + 1, book.url.length)
          );
          book.imageUrl = this.imageService.getimageURL(book.id);
          this.books.push(book);
        });
        this.slides = this.chunk(this.books, 3);
      },
      error => console.log(error)
    );

    this.dataSource = new MatTableDataSource<book>(this.books);
  }

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
