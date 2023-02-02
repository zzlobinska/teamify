import Button from '../../../Components/UI/Button';
import styles from './UserDetails.module.scss';
import {
	BsFileEarmarkCheckFill,
	BsFillArrowUpLeftSquareFill,
} from 'react-icons/bs';
import { BsFileEarmarkPersonFill } from 'react-icons/bs';
import {
	LoaderFunctionArgs,
	useLoaderData,
	useNavigate,
} from 'react-router-dom';
import axios from 'axios';

type UserType = {
	firstName: string;
	lastName: string;
	username: string;
	height: number;
	weight: number;
	image: string;
};

const UserDetails = () => {
	const userData: any = useLoaderData();
	console.log('userData', userData);

	const navigate = useNavigate();

	return (
		<div className={styles.section}>
			<button onClick={() => navigate(-1)} className={styles.return}>
				<BsFillArrowUpLeftSquareFill color='white' />
				<p className={styles.back_txt}>Go back</p>
			</button>
			<div className={styles.content}>
				<div className={styles.user}>
					<img className={styles.photo} alt='a user' src={userData.image} />
					<div className={styles.description}>
						<h2 className={styles.name}>
							{userData.firstName} {userData.lasttName}
						</h2>
						<p className={styles.nickname}>{userData.username}</p>
						<div className={styles.following}>
							<div className={styles.followers}>
								<BsFileEarmarkCheckFill color='white' />
								<p className={styles.text}>Following {userData.height}</p>
							</div>
							<div className={styles.followers}>
								<BsFileEarmarkPersonFill color='white' />
								<p className={styles.text}>Followers {userData.weight.toFixed(0)}</p>
							</div>
						</div>
					</div>
				</div>
				<a href='github.com/'>
					<Button dark text='View On Github' />
				</a>
			</div>
		</div>
	);
};

export default UserDetails;

export const loader = async ({ params }: LoaderFunctionArgs) => {
	

	try {
		const response = await axios.get(
			`https://dummyjson.com/users/${params.userId}`
		);
		const data: UserType = response.data;
		return data;
	} catch {}
};
