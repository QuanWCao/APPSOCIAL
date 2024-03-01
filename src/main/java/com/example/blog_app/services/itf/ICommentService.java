package com.example.blog_app.services.itf;

import com.example.blog_app.payloads.CommentDto;

public interface ICommentService {

    CommentDto createComment(CommentDto commentDto, Integer postId);

    void deleteComment(Integer commentId);

}
