package com.example.blog_app.services.itf;

import com.example.blog_app.payloads.UserDto;

import java.util.List;

public interface IUserService {
    UserDto registerNewUser(UserDto user);
    UserDto createUser(UserDto user);
    UserDto updateUser(UserDto user,Integer userId);
    UserDto getUserById(Integer userI);
    List<UserDto> getAllUser();
    void deleteUser(Integer userId);



}
