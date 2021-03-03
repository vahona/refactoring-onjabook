import React, { useContext } from 'react';
import { PostContext } from './Post';

export default function PostImage() {
	const { post } = useContext(PostContext);
	return (
		<img
			className="main-picture"
			src={post.imgUrl}
			alt={`Post picture - ${post.postTextContent}`}
		/>
	);
}
