package com.reviews.service;



import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.reviews.model.Review;
import com.reviews.repository.ReviewRepository;


@Service
@Component
public class ReviewServiceImpl implements ReviewService {

    private ReviewRepository reviewRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }


	@Override
	public List<String> getAllReviews(Long movieId) {
		
	return reviewRepository.findByMovieId(movieId).stream().map(Review::getComments).collect(Collectors.toList());
	
	}
	@Override
	public void save(Review review) {
		// TODO Auto-generated method stub
		reviewRepository.save(review);
	}
}
