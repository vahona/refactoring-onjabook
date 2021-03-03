import { resetWarningCache } from 'prop-types';
import React, { createContext, useReducer } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(
		(state, action) => {
			switch (action.type) {
				case 'ADD_NEW_COMMENT_TO_POST': {
					// recreate the new post collection
					// we need the ID of the post we want to comment on
					// dispatch({type: "ADD_NEW_COMMENT_TO_POST", postId: postId, comment: newComment})
					//action.postId
					//action.comment
					// {
					//     "commentId": 1,
					//     "userId": "121212",
					//     "date": 12423232423,
					//     "commentTextContent": "Hello, super post."
					// },
					const newPosts = state.posts.map(post => {
						if (post.postId === action.postId) {
							// update the post
							return {
								...post,
								comments: [...post.comments, action.comment],
							};
						}
						return post;
					});
					return {
						...state,
						posts: newPosts,
					};
				}
			}
		},
		{
			posts: [],
			users: [],
			userLoggedIn: '',
		}
	);
	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
}

export default { Context, ContextProvider };
