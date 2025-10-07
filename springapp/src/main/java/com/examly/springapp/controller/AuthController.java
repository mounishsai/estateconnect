package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.LoginDTO;
import com.examly.springapp.model.LoginResponseDTO;
import com.examly.springapp.model.User;
import com.examly.springapp.service.UserServiceImpl;

@RestController
public class AuthController {

    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/api/register")
    public ResponseEntity<?> registerUser(@RequestBody User user){
        User registeredUser = userService.registerUser(user);
        if(registeredUser == null)
            return ResponseEntity.status(204).body(null);
        return ResponseEntity.status(201).body(registeredUser);
    }

    @PostMapping("/api/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO user){
        LoginResponseDTO loggedUser = userService.loginUser(user);
        if(loggedUser == null)
            return ResponseEntity.status(401).body("Invalid Credentitals");
        return ResponseEntity.status(201).body(loggedUser);
    }

    @GetMapping("/api/user/{userId}")
    public ResponseEntity<?> getUserById(@PathVariable long userId){
        User user = userService.getUserById(userId);
        if(user == null)
            return ResponseEntity.status(404).body("Not Found");
        return ResponseEntity.status(200).body(user);
    }
    
}
