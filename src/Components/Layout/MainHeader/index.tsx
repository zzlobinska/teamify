import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './MainHeader.module.scss';
import { useState } from 'react';
import classNames from 'classnames';

const MainHeader = () => {
	const [isMobileActive, setIsMobileActive] = useState(false);

	const mobileMenuHandler = () => {
		setIsMobileActive((prev) => !prev);
	};
	return (
		<div className={classNames(styles.header, styles.grey)}>
			<Link to='/' className={styles.home}>
				<p className={styles.logo}>Teamify</p>
			</Link>
			<div
				className={classNames(styles.links, {
					[styles.active]: isMobileActive,
				})}
			>
				<Link to='/' className={styles.link}>
					Start
				</Link>
				<Link to='about-us' className={styles.link}>
					About Us
				</Link>
			</div>
			<button onClick={mobileMenuHandler} className={styles.mobile}>
				<FontAwesomeIcon icon={faBars} />
			</button>
		</div>
	);
};

export default MainHeader;
