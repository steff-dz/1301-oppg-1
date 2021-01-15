import React, { useState, useEffect } from 'react';

import GlobalStyle from './components/GlobalStyle/index';
import PageHeader from './components/PageHeader/index';
//import Skeleton from './components/Skeleton.index'
import UserContainer from './components/UserContainer/index';

function App() {
	const [ responseData, setResponseData ] = useState([]);

	useEffect(
		() => {
			console.log(responseData);
		},
		[ responseData ]
	);

	const handleUsers = () => {
		fetch('https://reqres.in/api/users?delay=3')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setResponseData(data.data);
				console.log(responseData);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<React.Fragment>
			<GlobalStyle />
			<PageHeader>
				<h1>Hallo verden!</h1>
				<button onClick={handleUsers}>Get Users</button>
			</PageHeader>

			<p>
				Stuff will go here: <b />
			</p>
			<pre>
				<code>{JSON.stringify(responseData, null, 2)}</code>
			</pre>
			<main>
				{responseData.map((el) => (
					<UserContainer key={el.id} firstName={el.first_name} lastName={el.last_name} avatar={el.avatar} />
				))}
			</main>
		</React.Fragment>
	);
}

export default App;

// async function onFetchingUsers() {
//   const response = await fetch('https://reqres.in/api/users?delay=3')
//   const data = await response.data
// }

// onFetchingUsers().catch(error => {
//   console.log(error)
// })
