package com.example.blog_app.services;

import com.example.blog_app.entities.Category;
import com.example.blog_app.entities.Post;
import com.example.blog_app.entities.User;
import com.example.blog_app.exceptions.ResourceNotFoundException;

import com.example.blog_app.payloads.PostDto;
import com.example.blog_app.payloads.PostResponse;
import com.example.blog_app.repositories.CategoryRepository;

import com.example.blog_app.repositories.PostRepository;

import com.example.blog_app.repositories.UserRepository;

import com.example.blog_app.services.itf.IPostService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostService implements IPostService {

    @Autowired
    private PostRepository postRepository;
    @Autowired
    private ModelMapper mm;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public PostDto createPost(PostDto postDto, Integer userId,Integer catId) {
        User user = this.userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","id",userId ));

        Category cat = this.categoryRepository.findById(catId).orElseThrow(()-> new ResourceNotFoundException("User","id",catId ));



        Post p = mm.map(postDto, Post.class);
        p.setUser(user);
        p.setCategory(cat);
        p.setImageName("default.png");
        p.setAddedDate(new Date());

        return mm.map(this.postRepository.save(p),PostDto.class);


    }

    @Override
    public PostDto updatePost(PostDto postDto, Integer postId) {
        Post post = this.postRepository.findById(postId).orElseThrow(()-> new ResourceNotFoundException("User","id",postId));

        Category category = this.categoryRepository.findById(postDto.getCategory().getCategoryId()).get();

        post.setTitle(postDto.getTitle());
        post.setContent(postDto.getContent());
        post.setImageName(postDto.getImageName());
        post.setCategory(category);

        //p.setUser(postDto.getUser());
        Post pp = this.postRepository.save(post);
        return mm.map(pp, PostDto.class);
    }

    @Override
    public void deletePost(Integer postId) {
        Post p = this.postRepository.findById(postId).orElseThrow(()-> new ResourceNotFoundException("User","id",postId));

        this.postRepository.delete(p);

    }

    @Override
    public  PostResponse getAllPost(Integer pageNumber,Integer pageSize,String sortBy,String sortDir) {
        Sort sort = (sortDir.equalsIgnoreCase("asc")) ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();

        Pageable p = PageRequest.of(pageNumber, pageSize, sort);

        Page<Post> pagePost = this.postRepository.findAll(p);

        List<Post> allPosts = pagePost.getContent();

        List<PostDto> postDtos = allPosts.stream().map((post) -> this.mm.map(post, PostDto.class))
                .collect(Collectors.toList());

        PostResponse postResponse = new PostResponse();

        postResponse.setContent(postDtos);
        postResponse.setPageNumber(pagePost.getNumber());
        postResponse.setPageSize(pagePost.getSize());
        postResponse.setTotalElements(pagePost.getTotalElements());

        postResponse.setTotalPages(pagePost.getTotalPages());
        postResponse.setLastPage(pagePost.isLast());

        return postResponse;
    }

    @Override
    public PostDto getPostById(Integer postId) {
        Post p = this.postRepository.findById(postId).orElseThrow(()-> new ResourceNotFoundException("User","id",postId));
        return mm.map(p, PostDto.class);
    }

    @Override
    public List<PostDto> getPostByCategory(Integer catId) {
        Category cat = this.categoryRepository.findById(catId).orElseThrow(()-> new ResourceNotFoundException("User","id",catId ));
        List<Post> posts = this.postRepository.findByCategory(cat);
        List<PostDto> postsDto=posts.stream().map(post->(mm.map(post, PostDto.class))).collect(Collectors.toList());
        return postsDto;
    }

    @Override
    public List<PostDto> getPostByUser(Integer userId) {
        User user = this.userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","id",userId ));
        List<Post> posts = this.postRepository.findByUser(user);
        List<PostDto> postsDto=posts.stream().map(post->(mm.map(post, PostDto.class))).collect(Collectors.toList());
        return postsDto;
    }



    @Override
    public List<PostDto> searchPosts(String keyword) {
        List<Post> posts = this.postRepository.searchByTitle("%" + keyword + "%");
        List<PostDto> postDtos = posts.stream().map((post) -> this.mm.map(post, PostDto.class)).collect(Collectors.toList());
        return postDtos;
    }

}
