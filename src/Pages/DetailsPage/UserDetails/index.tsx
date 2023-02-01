import Button from '../../../Components/UI/Button';
import styles from './UserDetails.module.scss';
import { BsFileEarmarkCheckFill } from 'react-icons/bs';
import { BsFileEarmarkPersonFill } from 'react-icons/bs';

const UserDetails = () => {
	return (
		<div className={styles.content}>
			<div className={styles.user}>
				<img
					className={styles.photo}
					alt='a user'
					src='https://scontent.fpoz3-1.fna.fbcdn.net/v/t31.18172-8/19055483_1188929134567023_7020530751396910719_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=kbAk64VSYEwAX8KnqOa&_nc_ht=scontent.fpoz3-1.fna&oh=00_AfAEs2Ey6IdhllRHlzysqJJV8ViwwV1CBwnZ4JzDfAFprQ&oe=6401A409'
				/>
				<div className={styles.description}>
					<h2 className={styles.name}>Uki</h2>
					<p className={styles.nickname}>Tuki</p>
					<div className={styles.following}>
						<div className={styles.followers}>
							<BsFileEarmarkCheckFill color='white'/>
							<p className={styles.text}>Following (4)</p>
						</div>
						<div className={styles.followers}>
							<BsFileEarmarkPersonFill color='white'/>
							<p className={styles.text}>Followers (20)</p>
						</div>
					</div>
				</div>
			</div>
			<a href='github.com/'>
				<Button dark text='View On Github' />
			</a>
		</div>
	);
};

export default UserDetails;
