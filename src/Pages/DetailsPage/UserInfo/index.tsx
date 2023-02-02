import classNames from 'classnames';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import InfoBox from '../InfoBox';
import styles from './UserInfo.module.scss';

const UserInfo = () => {
	const userData: any = useLoaderData();
	const [isAddressActive, setIsAddressActive] = useState<boolean>(true);

	const addressHandler = () => {
		setIsAddressActive(true);
	};
	const professionHandler = () => {
		setIsAddressActive(false);
	};

	const usersAddress = [
		{
			title: 'Address',
			text: userData.address.address,
		},
		{
			title: 'Phone',
			text: userData.phone,
		},
		{
			title: 'E-mail',
			text: userData.email,
		},
	];
	const usersProffession = [
		{
			title: 'Proffession',
			text: userData.company.department,
		},
		{
			title: 'Job',
			text: userData.company.title,
		},
		{
			title: 'University',
			text: userData.university,
		},
	];

	const addressStyles = classNames(styles.btn, {
		[styles.active]: isAddressActive,
	});
	const professionStyles = classNames(styles.btn, {
		[styles.active]: !isAddressActive,
	});

	return (
		<div className={styles.section}>
			<div className={styles.switch}>
				<button onClick={addressHandler} className={addressStyles}>
					Address
				</button>
				<button onClick={professionHandler} className={professionStyles}>
					Proffession
				</button>
				<span className={classNames(styles.grey, {[styles.active] : !isAddressActive})}/>
			</div>
			{isAddressActive && (
				<div className={styles.address}>
					{usersAddress.map((user) => (
						<InfoBox title={user.title} text={user.text} />
					))}
				</div>
			)}
			{!isAddressActive && (
				<div className={styles.address}>
					{usersProffession.map((user) => (
						<InfoBox title={user.title} text={user.text} />
					))}
				</div>
			)}
		</div>
	);
};

export default UserInfo;
