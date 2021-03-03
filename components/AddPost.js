import React, { useState, useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import { FormStyle } from './Styles';

export default function AddPost() {
	const [postContent, setPostContent] = useState('');
	const [postImage, setPostImage] = useState('http://picsum.photos/100');

	const { state, dispatch } = useContext(GlobalContext);
	const { currentUser } = state;

	function createNewPost(e) {
		e.preventDefault();
		const newPost = {
			postId: Date.now(),
			date: new Date(),
			postTextContent: postContent,
			userId: currentUser,
			imgUrl: postImage,
			likes: [],
			comments: [],
		};
		dispatch({ type: 'ADD_NEW_POST', newPost: newPost });
		resetForm();
		alert('Post added.');
	}

	function resetForm() {
		setPostContent('');
		setPostImage('');
	}

	return (
		<div>
			<h2>Add a post</h2>
			<FormStyle onSubmit={createNewPost}>
				<label>New post content:</label>
				<textarea
					placeholder="Say what's on your mind..."
					value={postContent}
					onChange={e => setPostContent(e.target.value)}
					required
				/>
				<label>New post picture :</label>
				<input
					type="text"
					placeholder="Paste a picture url here"
					value={postImage}
					onChange={e => setPostImage(e.target.value)}
					required
				/>
				<button>Post</button>
			</FormStyle>
		</div>
	);
}
