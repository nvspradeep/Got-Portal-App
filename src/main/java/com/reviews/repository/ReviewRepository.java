package com.reviews.repository;


import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.reviews.model.Review;

public interface ReviewRepository extends CrudRepository<Review, Long> {

	List<Review> findByMovieId(Long movieId);
}