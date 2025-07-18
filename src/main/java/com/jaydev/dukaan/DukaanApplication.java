package com.jaydev.dukaan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DukaanApplication {

	public static void main(String[] args) {
		SpringApplication.run(DukaanApplication.class, args);
	}

	// @Bean
	// CommandLineRunner initDatabase(ProductRepository productRepo, CategoryRepository categoryRepo) {
	// 	return args -> {
	// 		// Step 1: Create and save categories
	// 		Category electronics = new Category();
	// 		electronics.setTitle("Electronics");
	// 		electronics.setImgUrl("https://via.placeholder.com/100");
	// 		electronics = categoryRepo.save(electronics);

	// 		Category books = new Category();
	// 		books.setTitle("Books");
	// 		books.setImgUrl("https://via.placeholder.com/100");
	// 		books = categoryRepo.save(books);

	// 		// Step 2: Create and save products, assign category IDs
	// 		Product p1 = new Product();
	// 		p1.setTitle("Laptop");
	// 		p1.setDesc("A powerful laptop for all your needs.");
	// 		p1.setPrice(1200.50);
	// 		p1.setImageUrls(List.of("https://via.placeholder.com/250"));
	// 		p1.setCategoryIds(List.of(electronics.getId()));
	// 		p1 = productRepo.save(p1); // save and update p1 with generated ID

	// 		Product p2 = new Product();
	// 		p2.setTitle("Smartphone");
	// 		p2.setDesc("A smart device that fits in your pocket.");
	// 		p2.setPrice(800.00);
	// 		p2.setImageUrls(List.of("https://via.placeholder.com/250"));
	// 		p2.setCategoryIds(List.of(electronics.getId()));
	// 		p2 = productRepo.save(p2);

	// 		Product p3 = new Product();
	// 		p3.setTitle("Sherlock Holmes");
	// 		p3.setDesc("Adventure of the famous detective.");
	// 		p3.setPrice(250.75);
	// 		p3.setImageUrls(List.of("https://via.placeholder.com/250"));
	// 		p3.setCategoryIds(List.of(books.getId()));
	// 		p3 = productRepo.save(p3);

	// 		// Step 3: Update categories with product IDs
	// 		electronics.setProductIds(List.of(p1.getId(), p2.getId()));
	// 		books.setProductIds(List.of(p3.getId()));

	// 		categoryRepo.save(electronics);
	// 		categoryRepo.save(books);
	// 	};

	// }
}