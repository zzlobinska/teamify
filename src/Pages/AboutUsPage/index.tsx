import { useState } from 'react';
import MainHeader from '../../Components/Layout/MainHeader';
import Newsletter from '../../Components/Layout/Newsletter';
import SearchSection from './SearchSection';
import UsersList from './UsersListSection';

const AboutUsPage = () => {
	const [whichUser, setWhichUser] = useState<string>('');
	return (
		<>
			<MainHeader grey />
			<SearchSection state={whichUser} setState={setWhichUser} />
			<UsersList state={whichUser} />
			<Newsletter />
		</>
	);
};
export default AboutUsPage;
