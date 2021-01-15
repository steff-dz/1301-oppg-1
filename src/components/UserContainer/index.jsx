import React from 'react';

const UserContainer = ({ id, firstName, lastName, avatar }) => {
	return (
		<article>
			<img src={avatar} />
			<h2>{firstName}</h2>
			<h3>{lastName}</h3>
		</article>
	);
};

export default UserContainer;
