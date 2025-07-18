package com.jaydev.dukaan.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "order_items")
public class OrderItem {
    private String productId;
    private int quantity;
    private double priceAtPurchase; // optional

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPriceAtPurchase() {
        return priceAtPurchase;
    }

    public void setPriceAtPurchase(double priceAtPurchase) {
        this.priceAtPurchase = priceAtPurchase;
    }
    
}