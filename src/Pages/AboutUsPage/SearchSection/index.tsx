import Button from '../../../Components/UI/Button';
import styles from './SearchSection.module.scss';

const SearchSection = ({
	state,
	setState,
}: {
	state: string;
	setState: (text: string) => void;
}) => {
	const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState(event.target.value);
	};

	return (
		<div className={styles.section}>
			<h1 className={styles.title}>Meet your future team!</h1>
			<div className={styles.search}>
				<input
					placeholder='Search by Nickname'
					className={styles.searchbar}
					onChange={searchHandler}
					value={state}
				/>
				<Button text='Search' />
			</div>
		</div>
	);
};

export default SearchSection;
