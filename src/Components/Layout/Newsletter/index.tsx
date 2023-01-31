import Button from '../../UI/Button';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Newsletter.module.scss';

const Newsletter = () => {
	return (
		<div className={styles.section}>
			<div className={styles.content}>
				<h1 className={styles.title}>Subscribe to get instant alerts</h1>
				<p className={styles.text}>
					Don't wanna miss something? Subscribe right now and get special deals
					and monthly newsletter
				</p>
				<form className={styles.newsletter}>
					<input
						placeholder='Enter your email address'
						className={styles.send_input}
					/>
					<Button text='Submit' />
				</form>
				<div className={styles.bottom}>
					<p className={styles.brand}>© Teamify</p>
					<p className={styles.copyright}>
						Copyrights @ Teamify, All rights reserved
					</p>
					<a className={styles.icon} href='twitter.com'><FontAwesomeIcon  icon={faTwitter} size='lg'/></a>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
