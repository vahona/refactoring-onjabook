import React, { useContext } from 'react';
import styled from 'styled-components';

import { PostContext } from './Post';
import { GlobalContext } from '../GlobalContext';
import { ContentHeaderStyles } from './PostHeader';

const PostCommentContainerStyles = styled.div`
	display: grid;
	gap: 10px;
`;

export default function PostComments() {
	const { post } = useContext(PostContext);
	const { state } = useContext(GlobalContext);
	const { users } = state;
	return (
		<PostCommentContainerStyles>
			<div>
				{post.comments.map(comment => {
					const commenter = users.find(user => user.userId === comment.userId);
					return (
						<div key={comment.commentId}>
							<ContentHeaderStyles>
								<img
									src={commenter.profilePictureUrl}
									alt={`profile pic of ${commenter.userName}`}
								/>
								<span>{commenter.userName}</span>
								<span className="post-date">
									{new Date(comment.date).toLocaleDateString()}
								</span>
							</ContentHeaderStyles>
							<p>{comment.commentTextContent}</p>
						</div>
					);
				})}
			</div>
		</PostCommentContainerStyles>
	);
}
