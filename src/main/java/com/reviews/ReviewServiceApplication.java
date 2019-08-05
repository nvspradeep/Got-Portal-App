package com.reviews;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Profile;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.jsf.el.WebApplicationContextFacesELResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.reviews.service.ReviewService;
import com.reviews.model.Review;

@SpringBootApplication
@CrossOrigin
public class ReviewServiceApplication {
	
	
	public static void main(String[] args) {
		SpringApplication.run(ReviewServiceApplication.class, args);
		
	}

	 @Bean
	    CommandLineRunner runner(ReviewService ReviewService) {
	        return args -> {
	        	ReviewService.save(new Review(1l,  "This book is for anyone who loves a gripping story -- no exceptions."));
	        	ReviewService.save(new Review(2l,  "A comic book that reads like a great novella and looks like a million bucks"));
	        	ReviewService.save(new Review(3l,  "It will interrupt your life and give you the best story you've ever read!"));
	        	ReviewService.save(new Review(4l,  "A comic book that reads like a great novella and looks like a million bucks"));
	            ReviewService.save(new Review(5l,  "you might find yourself continuing to fall in love with previously-hated Jaime Lannister and the amazing Brienne of ..."));
	            ReviewService.save(new Review(6l,  "The drawings fit the story, and the story drives the drawings"));
	            ReviewService.save(new Review(7l,  "Great tale just became greater"));
	            ReviewService.save(new Review(8l,  "its a good book"));
	            ReviewService.save(new Review(9l,  "its a good book"));
	            ReviewService.save(new Review(10l, "its a good book"));
	         
	        };
	    }
}
