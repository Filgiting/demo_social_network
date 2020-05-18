import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'It\'s my first post', likeCount: 8},
        {id: 3, message: 'Bla Bla Bla', likeCount: 55}
    ]
};

test('new post should be added', () => {
    //test data
    let action = addPostActionCreator('it-kamasutra');

    //action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.posts.length).toBe(4);
});

test('message of new post should it-kamasutra', () => {
    //test data
    let action = addPostActionCreator('it-kamasutra');

    //action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.posts[3].message).toBe('it-kamasutra');
});

test('after deleting length of message should be decrement', () => {
    //test data
    let action = deletePost(1);

    //action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.posts.length).toBe(2);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    //test data
    let action = deletePost(101);

    //action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.posts.length).toBe(3);
});

