package com.examly.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.examly.springapp.config.JwtUtils;
import com.examly.springapp.model.LoginDTO;
import com.examly.springapp.model.LoginResponseDTO;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepo;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private JwtUtils jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepo userRepo;

    @Override
    public User registerUser(User user){
        if(userRepo.findByEmail(user.getEmail()) == null){
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            return userRepo.save(user);
        }
        return null;
    }

    @Override
    public LoginResponseDTO loginUser(LoginDTO user){
        User existUser = userRepo.findByEmail(user.getEmail());
        if(existUser != null && passwordEncoder.matches(user.getPassword(),existUser.getPassword())){
            LoginResponseDTO response = new LoginResponseDTO(jwtService.GenerateToken(user.getEmail()),existUser.getUserRole(),existUser.getUsername(), existUser.getUserId());
            return response;
        }
        return null;
    }

    @Override
    public User getUserById(long userId) {
        return userRepo.findById(userId).get();
    }

    
    
}