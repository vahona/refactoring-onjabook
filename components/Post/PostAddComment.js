import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { GlobalContext } from '../GlobalContext';
import { PostContext } from './Post';

const AddCommentFormStyles = styled.form`
	display: flex;
	grid-gap: 10px;
	justify-content: space-between;
	background: #c4c4c4;
	padding: 0.6rem;
	border-radius: 10px;
	input {
		background: none;
		border: none;
		width: 100%;
	}
`;

export default function PostAddComment() {
	const [newCommentText, setNewComment] = useState('');
	const { state, dispatch } = useContext(GlobalContext);
	const { post } = useContext(PostContext);
	const { currentUser } = state;

	function addComment(e) {
		e.preventDefault();
		const newComment = {
			commentId: Date.now(),
			userId: currentUser,
			date: Date.now(),
			commentTextContent: newCommentText,
		};
		// Add a new dispatch action "ADD POST" (very similar to add like)
		dispatch({ type: 'ADD_COMMENT_TO_POST', postId: post.postId, newComment });
		setNewComment('');
	}

	return (
		<AddCommentFormStyles onSubmit={addComment}>
			<input
				type="text"
				value={newCommentText}
				onChange={e => setNewComment(e.target.value)}
				placeholder="Type your comment here"
				required
			/>
			<button>Post</button>
		</AddCommentFormStyles>
	);
}
