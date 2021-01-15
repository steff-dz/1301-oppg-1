import React from 'react';
import styled from 'styled-components';

const PageHeader = ({ children }) => {
	return <PageHeaderBase>{children}</PageHeaderBase>;
};

export const PageHeaderBase = styled.header`
	font-size: 2rem;
	text-align: center;
	background-color: lightgreen;

	h1 {
		margin: 0;
		padding: 1rem;
	}

	button {
		font-size: 1.5rem;
		margin: 1rem;
	}
`;

export default PageHeader;
