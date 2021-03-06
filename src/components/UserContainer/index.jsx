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
	display: flex;
	position: relative;
	margin: 0 8rem;
	background-color: #131320;
	border-radius: 10px;
	height: 20rem;
	width: 60vw;
	img {
		border-radius: 50%;
		height: 150px;
		margin: 1rem;
	}

	h2 {
		font-size: 5rem;
		height: fit-content;
		margin: 3rem 1rem;
		color: white;
	}

	.email-container {
		position: absolute;
		top: 50%;
		left: 20%;
		font-size: 2.5rem;
		color: white;
	}
`;

export default UserContainer;
