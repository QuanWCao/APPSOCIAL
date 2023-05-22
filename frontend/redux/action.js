import axios from "axios";

const serverUrl = "https://backendappsocial.onrender.com";

export const login =
  (emailAddress, password) => async (dispatch) => {
    try {
      dispatch({ type: "loginRequest" });
      
      let form_data = new FormData();
      form_data.append("emailAddress",emailAddress);
      form_data.append("password", password);

      const data = await axios
        .post(`${serverUrl}/api/login`, form_data)
        .then(function (response) {
          
          dispatch({ type: "loginSuccess", payload: response.data });
        
        })
        .catch(function (err) {
          dispatch({type: "loginFailure", payload: err.response.data.msg });
        });
    } catch (err) {
      console.log(err);
    }
  };

  export const logout =() => async (dispatch) => {
    try {
      dispatch({ type: "logoutRequest" });
      
      

      const data = await axios
        .post(`${serverUrl}/api/logout`)
        .then(function (response) {
          
          dispatch({ type: "logoutSuccess", payload: response.data });
        
        })
        .catch(function (err) {
          dispatch({type: "logoutFailure", payload: err.response.data.msg });
        });
    } catch (err) {
      console.log(err);
    }
  };
export const login_admin =
(emailAddress, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginAdminRequest" });
  
    let form_data = new FormData();
    form_data.append("emailAddress",emailAddress );
    form_data.append("password", password);

    const data = await axios
      .post(`${serverUrl}/api/login_admin`, form_data)
      .then(function (response) {
        
        dispatch({ type: "loginAdminSuccess", payload: response.data });
      })
      .catch(function (err) {
        dispatch({type: "loginAdminFailure", payload: err.response.data.msg });
      });
  } catch (err) {
    console.log(err);
  }
};

export const register = (formData) => async (dispatch) => {


try {
  dispatch({ type: "registerRequest" });
  console.log(emailAddress, password);
  const data = await axios
    .post(`${serverUrl}/api/register`, formData)
    .then(function (response) {
      console.log(response.data)
      dispatch({ type: "registerSuccess", payload: response.data });
    })
    .catch(function (err) {
      dispatch({type: "registerFailure", payload: err.response.data.msg});
    });
} catch (err) {
  console.log(err);
  
}
};

export const registerAdmin = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "registerAdminRequest" });

    const { data } = await axios.post(
      `${serverUrl}/api/register_admin`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch({ type: "registerAdminSuccess", payload: data.msg });
  } catch (err) {
    dispatch({
      type: "registerAdminFailure",
      payload: err.response.data.msg,
    });
  }
};
export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: "getUserRequest" });

    const { data } = await axios.get(`${serverUrl}/api/user/:id`);
    dispatch({ type: "getUserSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "getUserFailure", payload: err.response.data.msg });
  }
};
export const CreatePost =
(content , imageFile) => async (dispatch) => {
  try {
    dispatch({ type: "createPostRequest" });
  
    let form_data = new FormData();
    form_data.append("content",content );
    form_data.append("iimageFile", imageFile);
//bật hộ postman
    const data = await axios
      .post(`${serverUrl}/api/post`, form_data)
      .then(function (response) {
        
        dispatch({ type: "createPostSuccess", payload: response.data });
      })
      .catch(function (err) {
        dispatch({type: "createPostFailure", payload: err.response.data.msg });
      });
  } catch (err) {
    console.log(err);
  }
};
export const getPost =
() => async (dispatch) => {
  try {
    dispatch({ type: "loginAdminRequest" });
  
   
    const data = await axios
      .get(`${serverUrl}/api/post/:id`)
      .then(function (response) {
        
        dispatch({ type: "loginAdminSuccess", payload: response.data });
      })
      .catch(function (err) {
        dispatch({type: "loginAdminFailure", payload: err.response.data.msg });
      });
  } catch (err) {
    console.log(err);
  }
};
export const getFeedPosts =
() => async (dispatch) => {
  try {
    dispatch({ type: "getFeedPostRequest" });
  

    const data = await axios
      .get(`${serverUrl}/api/post`)
      .then(function (response) {
        
        dispatch({ type: "getFeedPostSuccess", payload: response.data });
      })
      .catch(function (err) {
        dispatch({type: "getFeedPostFailure", payload: err.response.data.msg });
      });
  } catch (err) {
    console.log(err);
  }
};
export const getUserPosts =
(emailAddress, password) => async (dispatch) => {
  try {
    dispatch({ type: "getUserPostsRequest" });
  
    

    const data = await axios
      .get(`${serverUrl}/api/posts_user/:id`)
      .then(function (response) {
        
        dispatch({ type: "getUserPostsSuccess", payload: response.data });
      })
      .catch(function (err) {
        dispatch({type: "getUserPostsFailure", payload: err.response.data.msg });
      });
  } catch (err) {
    console.log(err);
  }
};
export const UpdatePost =
(content , imageFile) => async (dispatch) => {
  try {
    dispatch({ type: "UpdatePostRequest" });
  
    let form_data = new FormData();
    form_data.append("content",content );
    form_data.append("iimageFile", imageFile);

    const data = await axios
      .patch(`${serverUrl}/api/post/:id`, form_data)
      .then(function (response) {
        
        dispatch({ type: "UpdatePostSuccess", payload: response.data });
      })
      .catch(function (err) {
        dispatch({type: "UpdatePostFailure", payload: err.response.data.msg });
      });
  } catch (err) {
    console.log(err);
  }
};
// export const LikePost =
// (emailAddress, password) => async (dispatch) => {
//   try {
//     dispatch({ type: "loginAdminRequest" });
  
//     let form_data = new FormData();
//     form_data.append("emailAddress",emailAddress );
//     form_data.append("password", password);

//     const data = await axios
//       .post(`${serverUrl}/api/login_admin`, form_data)
//       .then(function (response) {
        
//         dispatch({ type: "loginAdminSuccess", payload: response.data });
//       })
//       .catch(function (err) {
//         dispatch({type: "loginAdminFailure", payload: err.response.data.msg });
//       });
//   } catch (err) {
//     console.log(err);
//   }
// };
export const DeletePost =
(_id) => async (dispatch) => {
  try {
    dispatch({ type: "DeletePostRequest" });
  
    
    const {data} = await axios
      .delete(`${serverUrl}/api/post/:id`, {data:{_id}})
      .then(function (response) {
        
        dispatch({ type: "DeletePostSuccess", payload: response.data });
      })
      .catch(function (err) {
        dispatch({type: "DeletePostFailure", payload: err.response.data.msg });
      });
  } catch (err) {
    console.log(err);
  }
};
// export const UnlikePost =
// (emailAddress, password) => async (dispatch) => {
//   try {
//     dispatch({ type: "loginAdminRequest" });
  
//     let form_data = new FormData();
//     form_data.append("emailAddress",emailAddress );
//     form_data.append("password", password);

//     const data = await axios
//       .post(`${serverUrl}/api/login_admin`, form_data)
//       .then(function (response) {
        
//         dispatch({ type: "loginAdminSuccess", payload: response.data });
//       })
//       .catch(function (err) {
//         dispatch({type: "loginAdminFailure", payload: err.response.data.msg });
//       });
//   } catch (err) {
//     console.log(err);
//   }
// };
export const CreateComment =
(form_data) => async (dispatch) => {
  try {
    dispatch({ type: "CreateCommentRequest" });
  
   

    const data = await axios
      .post(`${serverUrl}/api/comment`, form_data)
      .then(function (response) {
        
        dispatch({ type: "CreateCommentSuccess", payload: response.data });
      })
      .catch(function (err) {
        dispatch({type: "CreateCommentFailure", payload: err.response.data.msg });
      });
  } catch (err) {
    console.log(err);
  }
};
export const UpdateComment =
(form_data) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateCommentRequest" });
  
    

    const data = await axios
      .post(`${serverUrl}/api//comment/:id`, form_data)
      .then(function (response) {
        
        dispatch({ type: "UpdateCommentSuccess", payload: response.data });
      })
      .catch(function (err) {
        dispatch({type: "UpdateCommentFailure", payload: err.response.data.msg });
      });
  } catch (err) {
    console.log(err);
  }
};
// export const LikeComment =
// (emailAddress, password) => async (dispatch) => {
//   try {
//     dispatch({ type: "loginAdminRequest" });
  
//     let form_data = new FormData();
//     form_data.append("emailAddress",emailAddress );
//     form_data.append("password", password);

//     const data = await axios
//       .post(`${serverUrl}/api/login_admin`, form_data)
//       .then(function (response) {
        
//         dispatch({ type: "loginAdminSuccess", payload: response.data });
//       })
//       .catch(function (err) {
//         dispatch({type: "loginAdminFailure", payload: err.response.data.msg });
//       });
//   } catch (err) {
//     console.log(err);
//   }
// };
export const DeleteComment =
() => async (dispatch) => {
  try {
    dispatch({ type: "DeleteCommentRequest" });
  
    

    const data = await axios
      .delete(`${serverUrl}/api/comment/:id`,)
      .then(function (response) {
        
        dispatch({ type: "DeleteCommentSuccess", payload: response.data });
      })
      .catch(function (err) {
        dispatch({type: "DeleteCommentFailure", payload: err.response.data.msg });
      });
  } catch (err) {
    console.log(err);
  }
};
export const UnlikeComment =
(emailAddress, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginAdminRequest" });
  
    let form_data = new FormData();
    form_data.append("emailAddress",emailAddress );
    form_data.append("password", password);

    const data = await axios
      .post(`${serverUrl}/api/login_admin`, form_data)
      .then(function (response) {
        
        dispatch({ type: "loginAdminSuccess", payload: response.data });
      })
      .catch(function (err) {
        dispatch({type: "loginAdminFailure", payload: err.response.data.msg });
      });
  } catch (err) {
    console.log(err);
  }
};
export const UpdateUser =
(emailAddress, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginAdminRequest" });
  
    let form_data = new FormData();
    form_data.append("emailAddress",emailAddress );
    form_data.append("password", password);

    const data = await axios
      .post(`${serverUrl}/api/login_admin`, form_data)
      .then(function (response) {
        
        dispatch({ type: "loginAdminSuccess", payload: response.data });
      })
      .catch(function (err) {
        dispatch({type: "loginAdminFailure", payload: err.response.data.msg });
      });
  } catch (err) {
    console.log(err);
  }
};
export const UpdateAvatar =
(emailAddress, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginAdminRequest" });
  
    let form_data = new FormData();
    form_data.append("emailAddress",emailAddress );
    form_data.append("password", password);

    const data = await axios
      .post(`${serverUrl}/api/login_admin`, form_data)
      .then(function (response) {
        
        dispatch({ type: "loginAdminSuccess", payload: response.data });
      })
      .catch(function (err) {
        dispatch({type: "loginAdminFailure", payload: err.response.data.msg });
      });
  } catch (err) {
    console.log(err);
  }
};