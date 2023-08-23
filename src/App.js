import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Stocks from './Pages/Stocks';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/stocks/:symbol' element={<Stocks />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
