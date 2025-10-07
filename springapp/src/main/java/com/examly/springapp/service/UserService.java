package com.examly.springapp.service;

import com.examly.springapp.model.LoginDTO;
import com.examly.springapp.model.LoginResponseDTO;
import com.examly.springapp.model.User;

public interface UserService {

    public User registerUser(User user);
    public LoginResponseDTO loginUser(LoginDTO user);
    public User getUserById(long userId);

}
