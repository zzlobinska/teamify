import styles from './MainHeader.module.scss';

const MainHeader = () => {
	return (
		<div className={styles.header}>
			
			<a href='/' className={styles.home}>
				<p className={styles.logo}>Teamify</p>
			</a>
			<div className={styles.links}>
				<a href='/' className={styles.link}>
					Start
				</a>
				<a href='about-us' className={styles.link}>
					About Us
				</a>
			</div>
			<button className={styles.mobile}>
				<img src={styles.hamburger} alt='an iconf of a hamburger menu' />
			</button>
			
		</div>
	);
};

export default MainHeader;
