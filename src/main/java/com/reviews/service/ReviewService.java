package com.reviews.service;

import java.util.List;

import org.springframework.validation.annotation.Validated;

import com.reviews.model.Review;



public interface ReviewService {

 List<String> getAllReviews(Long movieId);

    void save(Review review);
}
