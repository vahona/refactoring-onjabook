import React, { useContext, createContext } from 'react';
import styled from 'styled-components';

import { GlobalContext } from '../GlobalContext';

const PostStyles = styled.div`
	display: grid;
	grid-template-columns: 500px;
	gap: 10px;
	.main-picture {
		width: 100%;
	}
`;

// CompoundComponent Post
// --------
// PostHeader OK
// PostDescription OK
// PostImage OK
// PostLikes OK
// PostComments OK
// AddPostComment OK

const PostContext = createContext();

export default function Post({ post, children }) {
	const { state } = useContext(GlobalContext);
	const { users, currentUser } = state;
	const currentUserObj = users.find(user => user.userId === currentUser);
	return (
		<PostContext.Provider value={{ post, currentUserObj }}>
			<PostStyles>{children}</PostStyles>
		</PostContext.Provider>
	);
}

export { PostContext };
