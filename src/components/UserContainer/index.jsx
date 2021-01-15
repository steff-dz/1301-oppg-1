import React from 'react';
import styled from 'styled-components';

const UserContainer = ({ firstName, lastName, avatar, email }) => {
	return (
		<UserContainerBase>
			<img src={avatar} alt={'user avatar.'} />
			<h2>{firstName}</h2>
			<h2>{lastName}</h2>
			<div className="email-container">{email}</div>
		</UserContainerBase>
	);
};

const UserContainerBase = styled.article`
	border: 1px solid red;
	display: flex;
	position: relative;
	margin: 0 8rem;
	img {
		border-radius: 50%;
		height: 200px;
		margin: 1rem;
	}

	h2 {
		font-size: 5rem;
		border: 1px solid blue;
		height: fit-content;
		margin: 5rem 1rem;
	}

	.email-container {
		position: absolute;
		top: 60%;
		left: 16%;
		font-size: 3rem;
	}
`;

export default UserContainer;
