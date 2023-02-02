import { Link } from 'react-router-dom';
import styles from './User.module.scss';

type UserProps = {
	src: string;
	name: string;
	nickname: string;
	id: number,
};



const User = (props: UserProps) => (
	<Link to={`/about-us/${props.id}`} className={styles.user}>
		<img className={styles.photo} src={props.src} alt='a member of a team' />
		<p className={styles.name}>{props.name}</p>
		<p className={styles.nickname}>{props.nickname}</p>
	</Link>
);

export default User;
