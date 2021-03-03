import React, { useContext } from 'react';
import styled from 'styled-components';
import { PostContext } from './Post';

export const ContentHeaderStyles = styled.div`
	display: grid;
	gap: 20px;
	grid-template-columns: auto 1fr 1fr;
	align-items: center;
	.post-date {
		text-align: right;
	}
	img {
		width: 35px;
		height: 35px;
		border-radius: 50%;
	}
`;

// TODO: currentUserObj from CONTEXT

export default function PostHeader() {
	const { post, currentUserObj } = useContext(PostContext);
	return (
		<ContentHeaderStyles>
			<img
				src={currentUserObj.profilePictureUrl}
				alt={`profile pic of ${currentUserObj.userName}`}
			/>
			<span>{currentUserObj.userName}</span>
			<span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
		</ContentHeaderStyles>
	);
}
