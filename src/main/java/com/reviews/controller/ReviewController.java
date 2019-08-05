package com.reviews.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.reviews.service.ReviewServiceImpl;
import com.reviews.model.Review;



@RestController
@CrossOrigin
@RequestMapping("/api/reviews")
public class ReviewController {

	@Autowired
	private ReviewServiceImpl reviewService;
	
	 @GetMapping("/{movieId}")
	 @ResponseStatus(HttpStatus.OK)
	    public List<String> getReviews(@PathVariable Long movieId) {
		 System.out.println("received movieId is "+movieId);
	        return reviewService.getAllReviews(movieId);
	    }
	 
	@PostMapping    
	@ResponseStatus(HttpStatus.CREATED)
	    public void postReview(@RequestBody Review review) {
		 System.out.println("received movieId comments is "+review.getComments());
	         reviewService.save(review);
	    }
	 
	 
}
