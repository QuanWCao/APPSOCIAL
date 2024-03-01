package com.example.blog_app.services;

import com.example.blog_app.entities.Category;
import com.example.blog_app.exceptions.ResourceNotFoundException;
import com.example.blog_app.payloads.CategoryDto;
import com.example.blog_app.repositories.CategoryRepository;
import com.example.blog_app.services.itf.ICategoryService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ModelMapper mm;
    @Override
    public CategoryDto createCategory(CategoryDto c) {
        Category cat = mm.map(c, Category.class);
        Category addedCat = categoryRepository.save(cat);

        return mm.map(addedCat, CategoryDto.class);
    }

    @Override
    public CategoryDto updateCategory(CategoryDto c, Integer id) {
        Category cat = this.categoryRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("User","id",id ));
        cat.setCategoryTitle(c.getCategoryTitle());
        cat.setCategoryDescription(c.getCategoryDescription());
        return mm.map(this.categoryRepository.save(cat), CategoryDto.class);
    }

    @Override
    public void deleteCategory(Integer userId) {
        Category cat = this.categoryRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","id",userId ));
        this.categoryRepository.delete(cat);
    }

    @Override
    public CategoryDto getCategoryById(Integer userId) {
        Category cat=this.categoryRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","id",userId ));
        return mm.map(this.categoryRepository.save(cat), CategoryDto.class);
    }

    @Override
    public List<CategoryDto> getAllCategory() {
        List<Category> cat = this.categoryRepository.findAll();
        List<CategoryDto> U = cat.stream().map(c -> mm.map(this.categoryRepository.save(c), CategoryDto.class)).collect(Collectors.toList());
        return U;
    }
}
