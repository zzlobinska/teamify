import { Outlet } from 'react-router-dom';

import MainHeader from '../MainHeader';
import ScrollToTop from '../../Helpers/ScrollToTop';


const RootLayout = () => {
	return (
		<>
			<ScrollToTop/>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;