package com.jaydev.dukaan.repository;

import com.jaydev.dukaan.model.Category;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends MongoRepository<Category, String> {
    List<Category> findByTitleContainingIgnoreCase(String title);
}