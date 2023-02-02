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

const UsersList = ({ state }: { state: string }) => {
	const [usersList, setUsersList] = useState<UserType[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getData = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(
				`https://dummyjson.com/users/search?q=${state}&limit=12&`
			);

			setUsersList(response.data.users);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			getData();
		}, 400);
		return () => clearTimeout(timer);
	}, [state]);
	console.log(usersList);

	return (
		<div className={styles.section}>
			<div className={styles.users}>
				{isLoading ? (
					<p className={styles.not_found}>Loading...</p>
				) : (
					usersList.map((user) => (
						<User
							src={user.image}
							name={user.firstName}
							nickname={user.username}
							key={user.id}
							id={user.id}
						/>
					))
				)}
				{usersList.length === 0 && !isLoading && (
					<p className={styles.not_found}>Nothing found.</p>
				)}
			</div>
		</div>
	);
};
export default UsersList;



