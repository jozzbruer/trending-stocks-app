import React, { useState } from 'react';
import Search from '../Components/Search';
import Cards from '../Components/Cards';

const Home = () => {
	const [searchString, setSearchString] = useState('');
	const handleSearchStringUpdate = (searchString) => {
		setSearchString(searchString);
	};
	return (
		<>
			<Search searchStringUpdated={handleSearchStringUpdate} />
			<Cards searchString={searchString} />
		</>
	);
};

export default Home;
