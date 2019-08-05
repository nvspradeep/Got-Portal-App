import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { NgForm } from "@angular/forms";
import { BookService } from "src/app/services/book-service.service";
import { ReviewService } from "src/app/services/review-service.service";
import { ImageService } from "src/app/image.service";
import { book } from "src/app/model/book.model";
import { reviewModel } from "src/app/model/review.model";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";
import {
  trigger,
  transition,
  animate,
  style,
  state
} from "@angular/animations";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(550, style({ opacity: 1 }))
      ]),
      transition(":leave", [
        // :leave is alias to '* => void'
        animate(250, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class BookDetailsComponent implements OnInit {
  movieId: number = Number(this.route.snapshot.paramMap.get("id"));
  book: book = new book();
  isReviewEnabled = false;
  isReviewSuccessfullyPosted: boolean = false;
  showLoadingIndicator: boolean = true;
  new_comment: string;
  reviewModel = new reviewModel();
  reviews: string[] = [];
  imageSource: String;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private reviewService: ReviewService,
    private location: Location,
    private imageService: ImageService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loadSelectedBook();
    this.loadReviews();
  }

  submitForm(form: NgForm) {
    if (typeof this.new_comment != "undefined" && this.new_comment) {
      this.reviewModel.movieId = this.movieId;
      this.reviewModel.comments = this.new_comment;
      this.reviewService.saveReview(this.reviewModel).subscribe(
        () => {
          this.isReviewEnabled = false;
          this.openSnackBar("Review Saved Successfully", "Thank You");
          this.loadReviews();
        },
        error => {
          this.openSnackBar("Review Not Saved", "Try again");
        }
      );
    }
    form.resetForm();
  }

  loadReviews() {
    this.reviewService.getReviews(this.movieId).subscribe(
      (reviews: string[]) => {
        this.reviews = reviews;
      },
      error => console.log(error)
    );
  }

  loadSelectedBook() {
    this.bookService.getBookDetails(this.movieId).subscribe(
      (books_fromapi: book) => {
        books_fromapi.id = this.movieId;
        this.book = books_fromapi;
      },
      error => console.log(error),
      () => this.loadImage()
    );
  }

  loadImage() {
    this.imageSource = this.imageService.getimageURL(this.book.id);
  }
  disableLoadingIndicator() {
    this.showLoadingIndicator = false;
  }

  openSnackBar(message: string, type: string) {
    const config = new MatSnackBarConfig();
    let extraClasses;
    if (type == "Thank You") {
      extraClasses = ["snackbar-success"];
    } else {
      extraClasses = ["snackbar-fail"];
    }
    config.panelClass = extraClasses;
    config.duration = 1500;
    this._snackBar.open(message, type, config);
  }
}
