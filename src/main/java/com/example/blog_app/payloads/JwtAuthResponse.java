package com.example.blog_app.payloads;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.filter.OncePerRequestFilter;
@Data
@Getter
@Setter
public class JwtAuthResponse {

    private String token;

    private UserDto user;
}
