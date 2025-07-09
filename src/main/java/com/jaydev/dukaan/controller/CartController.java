package com.jaydev.dukaan.controller;

import com.jaydev.dukaan.model.Cart;
import com.jaydev.dukaan.service.ProductService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private ProductService productService;

    private Cart getCartFromSession(HttpSession session) {
        Cart cart = (Cart) session.getAttribute("cart");
        if (cart == null) {
            cart = new Cart();
            session.setAttribute("cart", cart);
        }
        return cart;
    }

    @GetMapping
    public Cart getCart(HttpSession session) {
        return getCartFromSession(session);
    }

    @PostMapping("/add")
    public Cart addToCart(@RequestParam("productId") String productId, @RequestParam(value = "quantity", defaultValue = "1") int quantity, HttpSession session) {
        Cart cart = getCartFromSession(session);
        productService.getProductById(productId).ifPresent(product -> {
            cart.addItem(product, quantity);
        });
        session.setAttribute("cart", cart);
        return cart;
    }

    @PostMapping("/remove")
    public Cart removeFromCart(@RequestParam("productId") String productId, HttpSession session) {
        Cart cart = getCartFromSession(session);
        cart.removeItem(productId);
        session.setAttribute("cart", cart);
        return cart;
    }
    
    @PostMapping("/clear")
    public Cart clearCart(HttpSession session) {
        Cart cart = new Cart();
        session.setAttribute("cart", cart);
        return cart;
    }
}