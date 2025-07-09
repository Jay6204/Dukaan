package com.jaydev.dukaan.model;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class Cart implements Serializable {

    private Map<String, CartItem> items = new HashMap<>();
    private double totalPrice;

    public Map<String, CartItem> getItems() {
        return items;
    }

    public void setItems(Map<String, CartItem> items) {
        this.items = items;
        recalculateTotalPrice();
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    /**
     * Adds a product to the cart or updates its quantity if it already exists.
     */
    public void addItem(Product product, int quantity) {
        if (product == null || product.getId() == null) {
            return;
        }
        CartItem cartItem = items.get(product.getId());
        if (cartItem != null) {
            cartItem.setQuantity(cartItem.getQuantity() + quantity);
        } else {
            items.put(product.getId(), new CartItem(product, quantity));
        }
        recalculateTotalPrice();
    }

    public void removeItem(String productId) {
        if (productId == null) {
            return;
        }
        items.remove(productId);
        recalculateTotalPrice();
    }

    private void recalculateTotalPrice() {
        totalPrice = items.values().stream()
                .mapToDouble(CartItem::getSubtotal)
                .sum();
    }
}