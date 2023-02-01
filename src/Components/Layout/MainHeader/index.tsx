import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './MainHeader.module.scss';
import { useState } from 'react';
import classNames from 'classnames';

type HeaderProps = {
	grey?: boolean;
	dark?: boolean;
};

const MainHeader = ({ grey, dark }: HeaderProps) => {
	const [isMobileActive, setIsMobileActive] = useState(false);

	const mobileMenuHandler = () => {
		setIsMobileActive((prev) => !prev);
	};
	return (
		<div
			className={classNames(styles.header, {
				[styles.dark]: dark,
			})}
		>
			<Link to='/' className={styles.home}>
				<p className={styles.logo}>Teamify</p>
			</Link>
			<div
				className={classNames(styles.links, {
					[styles.active]: isMobileActive,
				})}
			>
				<Link
					to='/'
					className={classNames(styles.link, {
						[styles.grey]: grey,
						[styles.dark]: dark,
					})}
				>
					Start
				</Link>
				<Link
					to='/about-us'
					className={classNames(styles.link, {
						[styles.grey]: grey,
						[styles.dark]: dark,
					})}
				>
					About Us
				</Link>
			</div>
			<button
				onClick={mobileMenuHandler}
				className={classNames(styles.mobile, {
					[styles.grey]: grey,
					[styles.dark]: dark,
				})}
			>
				<FontAwesomeIcon icon={faBars} color={dark ? 'white' : undefined} />
			</button>
		</div>
	);
};

export default MainHeader;
