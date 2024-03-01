package com.example.blog_app.services;

import com.example.blog_app.config.AppConstants;
import com.example.blog_app.entities.Role;
import com.example.blog_app.entities.User;
import com.example.blog_app.exceptions.ResourceNotFoundException;
import com.example.blog_app.payloads.UserDto;

import com.example.blog_app.repositories.RoleRepository;
import com.example.blog_app.repositories.UserRepository;
import com.example.blog_app.services.itf.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class UserService implements IUserService {



    @Autowired
    private UserRepository userRepository;


    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRepository ur;

    @Autowired
    private ModelMapper mm;

    @Override
    public UserDto registerNewUser(UserDto userDto) {

        User user = this.mm.map(userDto, User.class);


        user.setPassword(this.passwordEncoder.encode(user.getPassword()));


        Role role = this.roleRepository.findById(AppConstants.NORMAL_USER).get();

        user.getRoles().add(role);

        User newUser = this.userRepository.save(user);

        return this.mm.map(newUser, UserDto.class);
    }

    @Override
    public UserDto createUser(UserDto user) {
        return this.userToDto(ur.save(dtoToUser(user)));
    }

    @Override
    public UserDto updateUser(UserDto userDto, Integer userId) {
        User user = this.ur.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","id",userId ));
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setAbout(userDto.getAbout());
        return this.userToDto(ur.save(user));
    }

    @Override
    public UserDto getUserById(Integer userId) {
        User user=this.ur.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","id",userId ));
        return userToDto(user);
    }

    @Override
    public List<UserDto> getAllUser() {
        List<User> u = this.ur.findAll();
        List<UserDto> U = u.stream().map(user -> this.userToDto(user)).collect(Collectors.toList());
        return U;
    }

    @Override
    public void deleteUser(Integer userId) {

        User user = this.ur.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","id",userId ));
        this.ur.delete(user);
    }
    User dtoToUser(UserDto u)
    {
        User U = this.mm.map(u,User.class);


        return U;
    }
    UserDto userToDto(User u)
    {
        UserDto U = this.mm.map(u, UserDto.class);
        return U;
    }

}
