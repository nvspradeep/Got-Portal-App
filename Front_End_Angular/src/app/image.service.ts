import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  images = {
    1: "https://m.media-amazon.com/images/I/91dSMhdIzTL._AC_UL654_FMwebp_QL65_.jpg",
    2: "https://m.media-amazon.com/images/I/91Nl6NuijHL._AC_UL436_.jpg",
    3: "https://m.media-amazon.com/images/I/81XzVQzTQaL._AC_UL654_FMwebp_QL65_.jpg",
    4: "https://m.media-amazon.com/images/I/91oCMMypqSL._AC_UL654_FMwebp_QL65_.jpg",
    5: "https://m.media-amazon.com/images/I/91FoEbMhFNL._AC_UL436_.jpg",
    6: "https://m.media-amazon.com/images/I/818uy3m9ivL._AC_UL1308_FMwebp_QL65_.jpg",
    7: "https://m.media-amazon.com/images/I/A1nBtEbjqFL._AC_UL654_FMwebp_QL65_.jpg",
    8: "https://m.media-amazon.com/images/I/81WInI5d-TL._AC_UL654_FMwebp_QL65_.jpg",
    9: "https://m.media-amazon.com/images/I/91dSMhdIzTL._AC_UL654_FMwebp_QL65_.jpg",
    10: "https://m.media-amazon.com/images/I/91ue7GokAnL._AC_UL1090_FMwebp_QL65_.jpg"
  };
  getimageURL(id: number) {
    return this.images[id];
  }

  constructor() {}
}
