import React, { useContext } from 'react';
import styled from 'styled-components';

import { GlobalContext } from './GlobalContext';

import Post from './Post/Post';
import PostHeader from './Post/PostHeader';
import PostDescription from './Post/PostDescription';
import PostImage from './Post/PostImage';
import PostComments from './Post/PostComments';
import PostLikes from './Post/PostLikes';
import PostAddComment from './Post/PostAddComment';

const FeedListStyle = styled.div`
	display: grid;
	gap: 120px;
`;

export default function Feed() {
	const { state, dispatch } = useContext(GlobalContext);
	const { posts, loading } = state;
	return (
		<>
			<h2>Feed</h2>
			{loading && <p>Loading...</p>}
			{!loading && posts && (
				<FeedListStyle>
					{posts.map(post => (
						<Post key={post.postId} post={post}>
							<PostHeader />
							<PostDescription>{post.postTextContent}</PostDescription>
							<PostImage />
							<PostLikes />
							<PostComments />
							<PostAddComment />
						</Post>
					))}
				</FeedListStyle>
			)}
		</>
	);
}
