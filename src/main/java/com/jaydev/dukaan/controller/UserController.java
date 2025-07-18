package com.jaydev.dukaan.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jaydev.dukaan.service.UserService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.jaydev.dukaan.model.User;
import com.jaydev.dukaan.util.JwtUtil;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/users/signup")
    public User register(@Valid @RequestBody User user) throws Exception {
        return userService.registerUser(user);
    }

    @PostMapping("/users/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        try {
            User user = userService.login(loginRequest.getEmail(), loginRequest.getPassword());
            String token = jwtUtil.generateToken(user.getEmail());
            return ResponseEntity.ok(Map.of(
               "token", token,
               "userName", user.getUserName(),
               "email", user.getEmail()
            ));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
}
