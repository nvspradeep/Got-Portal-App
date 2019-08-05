import { Subject } from "rxjs/internal/Subject";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { reviewModel } from "../model/review.model";
@Injectable({
  providedIn: "root"
})
export class ReviewService {
  private ReviewsUrl = "/api/reviews";

  constructor(private http: HttpClient) {}

  getReviews(movieId: number) {
    return this.http.get(this.ReviewsUrl + "/" + movieId);
  }

  saveReview(review: reviewModel) {
    return this.http.post(this.ReviewsUrl, review);
  }
}
