import React, { createContext, useReducer, useEffect } from 'react';
import postsData from '../postsData.json';
import usersData from '../usersData.json';

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
	const [state, dispatch] = useReducer(
		(state, action) => {
			switch (action.type) {
				case 'LOAD_JSON_DATA': {
					// usually, there should be some fetching here
					return {
						...state,
						loading: false,
						posts: postsData,
						users: usersData,
					};
				}
				case 'ADD_NEW_POST': {
					return {
						...state,
						posts: [...state.posts, action.newPost],
					};
				}
				case 'UPDATE_CURRENT_USER': {
					const newUsersArray = state.users.map(user => {
						if (user.userId === state.currentUser) {
							// update the user and return it
							return {
								...user,
								userName: action.userName,
								profilePictureUrl: action.profilePictureUrl,
							};
						}
						return user;
					});
					return {
						...state,
						users: newUsersArray,
					};
				}
				case 'LIKE_POST': {
					const newPosts = state.posts.map(post => {
						if (post.postId === action.postId) {
							return {
								...post,
								likes: [...post.likes, action.newLike],
							};
						}
						return post;
					});
					return {
						...state,
						posts: newPosts,
					};
				}
				case 'UNLIKE_POST': {
					const newPosts = state.posts.map(post => {
						if (post.postId === action.postId) {
							return {
								...post,
								likes: post.likes.filter(like => like.userId !== state.currentUser),
							};
						}
						return post;
					});
					return {
						...state,
						posts: newPosts,
					};
				}
				case 'ADD_COMMENT_TO_POST': {
					const newPosts = state.posts.map(post => {
						if (post.postId === action.postId) {
							return {
								...post,
								comments: [...post.comments, action.newComment],
							};
						}
						return post;
					});
					return {
						...state,
						posts: newPosts,
					};
				}
				default: {
					console.error('No actions defined for', action.type);
					break;
				}
			}
			return state;
		},
		{
			loading: true,
			posts: [],
			users: [],
			currentUser: '1',
		}
	);

	useEffect(() => {
		setTimeout(() => {
			'';
			dispatch({ type: 'LOAD_JSON_DATA' });
		}, 1000);
	}, []);

	return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
}

export { GlobalContext, GlobalContextProvider };
