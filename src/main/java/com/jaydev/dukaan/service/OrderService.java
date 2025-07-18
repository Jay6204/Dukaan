package com.jaydev.dukaan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jaydev.dukaan.model.Order;
import com.jaydev.dukaan.repository.OrderRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public List<Order> getOrdersByStripeId(String stripeId) {
        return orderRepository.findByStripeId(stripeId);
    }

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    public void deleteOrder(String orderId) {
        orderRepository.deleteById(orderId);
    } 
}
