import Button from '../../UI/Button';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import * as EmailValidator from 'email-validator';
import styles from './Newsletter.module.scss';
import { useState } from 'react';

const Newsletter = () => {
	// const [isValid, setIsValid] = useState<boolean>(true);
	const [emailValue, setEmailValue] = useState<string>('');
	const [isEmailSend, setIsEmailSend] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const submitForm = (event: React.FormEvent) => {
		event.preventDefault();
		if (emailValue === '') {
			setError(true);
			return;
		}
		setError(false);
		console.log(emailValue);
		setEmailValue('');
		setIsEmailSend(true);
		setTimeout(() => setIsEmailSend(false), 2500);
	};

	const inputTextHandler = () => {
		if (emailValue !== '' && error) {
			setError(false)
		}
	};

	return (
		<div className={styles.section}>
			<div className={styles.content}>
				<h1 className={styles.title}>Subscribe to get instant alerts</h1>
				<p className={styles.text}>
					Don't wanna miss something? Subscribe right now and get special deals
					and monthly newsletter
				</p>
				{isEmailSend && <p className={styles.email_text}>Subscribed!</p>}

				{error && <p className={styles.email_text}>Please enter an email.</p>}
				<form onSubmit={submitForm} className={styles.newsletter}>
					<input
						placeholder='Enter your email address'
						className={styles.send_input}
						onChange={(event) => setEmailValue(event.target.value)}
						value={emailValue}
						type='email'
						onKeyDown={inputTextHandler}
					/>
					<Button text='Submit' />
				</form>
				<div className={styles.bottom}>
					<p className={styles.brand}>© Teamify</p>
					<p className={styles.copyright}>
						Copyrights @ Teamify, All rights reserved
					</p>
					<a className={styles.icon} href='twitter.com'>
						<FontAwesomeIcon icon={faTwitter} size='lg' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
