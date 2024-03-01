package com.example.blog_app.repositories;

import com.example.blog_app.entities.Category;
import com.example.blog_app.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository  extends JpaRepository<Category,Integer> {
}
