import axios from 'axios';

import { useEffect, useState } from 'react';
import User from '../User';
import styles from './UsersList.module.scss';

type UserType = {
	image: string;
	firstName: string;
	username: string;
	id: number;
};

const UsersList = () => {
	const [usersList, setUsersList] = useState<UserType[]>([]);

	const getData = async () => {
		try {
			const response = await axios.get('https://dummyjson.com/users?limit=12');

			setUsersList(response.data.users);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);
	console.log(usersList);

	return (
		<div className={styles.section}>
			<div className={styles.users}>
				{usersList.map((user) => (
					<User
						src={user.image}
						name={user.firstName}
						nickname={user.username}
						key={user.id}
					/>
				))}
			</div>
		</div>
	);
};
export default UsersList;
