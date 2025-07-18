package com.jaydev.dukaan.repository;

import com.jaydev.dukaan.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends MongoRepository<Order, String> {
    List<Order> findByStripeId(String stripeId);
}
