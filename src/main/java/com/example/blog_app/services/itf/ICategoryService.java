package com.example.blog_app.services.itf;

import com.example.blog_app.payloads.CategoryDto;

import java.util.List;

public interface ICategoryService {
    public CategoryDto createCategory(CategoryDto c);
    //update
    public CategoryDto updateCategory(CategoryDto c,Integer id);
    //delete
    public void deleteCategory(Integer id);
    //get
    public CategoryDto getCategoryById(Integer id);
    //get all
    public List<CategoryDto> getAllCategory();
}
