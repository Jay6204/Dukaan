package com.jaydev.dukaan.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jaydev.dukaan.model.User;
import com.jaydev.dukaan.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(User user) throws Exception {
        if (userRepository.findOneByEmailIgnoreCase(user.getEmail()).isPresent()) {
            throw new Exception("User with this email already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User login(String email, String rawPassword) throws Exception {
       Optional<User> optionalUser = userRepository.findOneByEmailIgnoreCase(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();

            if (passwordEncoder.matches(rawPassword, user.getPassword())) {
                return user;
            }
        }
        throw new RuntimeException("Invalid email or password");
    }

}
