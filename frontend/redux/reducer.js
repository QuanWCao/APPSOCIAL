import { createReducer } from "@reduxjs/toolkit";

export const authReducer = createReducer(
  {},
  {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
      state.role = action.payload.user.role
      state.msg = action.payload.msg;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.err = action.payload;
    },
    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.msg = action.payload.msg;
    },
    logoutFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.err = action.payload;
    },

    loginAdminRequest: (state) => {
      state.loading = true;
    },
    loginAdminSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.msg = action.payload.msg;
    },
    loginAdminFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.err = action.payload;
    },

    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = action.payload;
      state.user = action.payload.user;

      state.msg = action.payload.msg;

    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.err = action.payload;
    },
    registerAdminRequest: (state) => {
      state.loading = true;
    },
    registerAdminSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = action.payload;
      state.user = action.payload.user;
      state.msg = action.payload.msg;
    },
    registerAdminFailure: (state, action) => {
      state.loading = false;
      state.err = action.payload;
    },
    getUserRequest: (state) => {
      state.loading = true;
    },
    getUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    getUserFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.err = action.payload;
    },
    clearError: (state) => {
      state.err = null;
    },
    clearMessage: (state) => {
      state.msg = null;
    },
  }
);
export const postReducer = createReducer
({}, 
  {
    getPostRequest: (state) => {
      state.loading = true;
    },
    getPostSuccess: (state, action) => {
      state.loading =  false;
      state.post = action.payload;
    },
    getPostFailure: (state, action) => {
      state.loading =  false;
      state.err = action.payload;
    },
    createPostRequest: (state) => {
      state.loading = true;
    },
    createPostSuccess: (state, action) => {
      state.loading =  false;
      state.msg = action.payload.msg;
    },
    createPostFailure: (state, action) => {
      state.loading =  false;
      state.err = action.payload;
    },
    getFeedPostRequest: (state) => {
      state.loading = true;
    },
    getFeedPostSuccess: (state, action) => {
      state.loading =  false;
      state.post = action.payload;
    },
    getFeedPostFailure: (state, action) => {
      state.loading =  false;
      state.err = action.payload;
    },
    clearError: (state) => {
      state.err = null;
    },
    clearMessage: (state) => {
      state.msg = null;
    },


}
);