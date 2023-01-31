import styles from './User.module.scss'

type UserProps = {
	src: string;
	name: string;
	nickname: string;
};

const User = (props: UserProps) => (
	<div className={styles.user}>
		<img
			className={styles.photo}
			src={props.src}
			alt='a member of a team'
		/>
		<p className={styles.name}>{props.name}</p>
		<p className={styles.nickname}>{props.nickname}</p>
	</div>
);

export default User