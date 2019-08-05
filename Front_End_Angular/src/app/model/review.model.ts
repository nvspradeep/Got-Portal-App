export class reviewModel {
  movieId: number;
  comments: string;

  reviewModel(movieId: number, comments: string) {
    this.movieId = movieId;
    this.comments = comments;
  }
}
