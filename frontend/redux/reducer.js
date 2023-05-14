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
