import { useState } from 'react';
import Button from '../../../Components/UI/Button';
import styles from './SearchSection.module.scss';

const SearchSection = () => {
	const [whichUser, setWhichUser] = useState<string>();

	const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setWhichUser(event.target.value);
	};

	return (
		<div className={styles.section}>
			<h1 className={styles.title}>Meet your future team!</h1>
			<div className={styles.search}>
				<input
					placeholder='Search by Nickname'
					className={styles.searchbar}
					onChange={searchHandler}
				/>
				<Button text='Search' />
			</div>
		</div>
	);
};

export default SearchSection;
