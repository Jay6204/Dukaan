package com.jaydev.dukaan;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.jaydev.dukaan.model.Product;
import com.jaydev.dukaan.repository.ProductRepository;

@SpringBootApplication
public class DukaanApplication {

	public static void main(String[] args) {
		SpringApplication.run(DukaanApplication.class, args);
	}

	// @Bean
	// CommandLineRunner initDatabase(ProductRepository repository) {
	// 	return args -> {
	// 		Product p1 = new Product();
	// 		p1.setName("Laptop");
	// 		p1.setDescription("A powerful laptop for all your needs.");
	// 		p1.setPrice(1200.50);
	// 		p1.setImageUrl("https://via.placeholder.com/250");
	// 		p1.setCategory("Electronics");
	// 		repository.save(p1);
			
	// 		Product p2 = new Product();
	// 		p2.setName("Smartphone");
	// 		p2.setDescription("A smart device that fits in your pocket.");
	// 		p2.setPrice(800.00);
	// 		p2.setImageUrl("https://via.placeholder.com/250");
	// 		p2.setCategory("Electronics");
	// 		repository.save(p2);

	// 		Product p3 = new Product();
	// 		p3.setName("Sherlock Holmes");
	// 		p3.setDescription("Adventure of the famous detective.");
	// 		p3.setPrice(250.75);
	// 		p3.setImageUrl("https://via.placeholder.com/250");
	// 		p3.setCategory("Books");
	// 		repository.save(p3);
	// 	};
	// }
}