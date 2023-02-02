import MainHeader from '../../Components/Layout/MainHeader';
import Newsletter from '../../Components/Layout/Newsletter';
import UserDetails from './UserDetails';
import UserInfo from './UserInfo';

const DetailsPage = () => {
	return (
		<>
			<MainHeader dark />
			<UserDetails />
			<UserInfo />
			<Newsletter />
		</>
	);
};

export default DetailsPage;
