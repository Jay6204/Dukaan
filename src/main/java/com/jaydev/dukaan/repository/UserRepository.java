package com.jaydev.dukaan.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.jaydev.dukaan.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findOneByEmailIgnoreCase(String email);
}
