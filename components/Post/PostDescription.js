import React from 'react';
import styled from 'styled-components';

const DescriptionStyle = styled.p`
	font-size: 2rem;
	font-weight: 600;
`;

export default function PostDescription({ children }) {
	return <DescriptionStyle>{children}</DescriptionStyle>;
}
