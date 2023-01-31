import { useState } from 'react';
import MainHeader from '../../Components/Layout/MainHeader';
import SearchSection from './SearchSection';
import UsersList from './UsersListSection';

const AboutUsPage = () => {
	const [whichUser, setWhichUser] = useState<string>('');
	return (
		<>
			<MainHeader />
			<SearchSection state={whichUser} setState={setWhichUser}/>
			<UsersList state={whichUser}/>
		</>
	);
};
export default AboutUsPage;
