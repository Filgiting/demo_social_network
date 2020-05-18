import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'It\'s my first post', likeCount: 8},
        {id: 3, message: 'Bla Bla Bla', likeCount: 55}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.newPostText,
                likeCount: 147
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        case SET_STATUS:
            return {...state, status: action.status};

        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.postId)};

        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

//thunk
export const getUserProfile = (userId) => async (dispatch) => {

    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {

    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {

    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};

export default profileReducer;