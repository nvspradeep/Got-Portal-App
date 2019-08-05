import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BookService {
  private BooksUrl = "/api/books";
  //private bookDetailUrl = "/api/books/";

  constructor(private http: HttpClient) {}

  getAllBooks() {
    return this.http.get(this.BooksUrl);
  }

  getBookDetails(id: number) {
    return this.http.get(this.BooksUrl + "/" + id);
  }
}
