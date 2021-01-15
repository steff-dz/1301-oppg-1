import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle/index';
import PageHeader from './components/PageHeader/index';
//import Skeleton from './components/Skeleton.index'
import UserContainer from './components/UserContainer/index';

function App() {
	const [ responseData, setResponseData ] = useState([]);

	useEffect(() => {}, [ responseData ]);

	const handleUsers = () => {
		fetch('https://reqres.in/api/users?delay=1')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setResponseData(data.data);
				//console.log(responseData);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<React.Fragment>
			<GlobalStyle />
			<PageHeader>
				<h1>Contact List</h1>
				<button onClick={handleUsers}>Get Users</button>
			</PageHeader>

			<MainBase>
				{responseData.map((el) => (
					<UserContainer
						key={el.id}
						firstName={el.first_name}
						lastName={el.last_name}
						avatar={el.avatar}
						email={el.email}
					/>
				))}
			</MainBase>
		</React.Fragment>
	);
}

const MainBase = styled.main`
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin: 0 2rem;
	height: fit-content;
`;

export default App;

// async function onFetchingUsers() {
//   const response = await fetch('https://reqres.in/api/users?delay=3')
//   const data = await response.data
// }

// onFetchingUsers().catch(error => {
//   console.log(error)
// })

/* <pre>
<code>{JSON.stringify(responseData, null, 2)}</code>
</pre> */
