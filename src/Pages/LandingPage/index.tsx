import styles from './LandingPage.module.scss';
import Flower from '../../Components/Img/Flower.png';
import Button from '../../Components/UI/Button';
import MainHeader from '../../Components/Layout/MainHeader';

const LandingPage = () => {
	return (
		<>
		<MainHeader/>
		<div className={styles.landing}>
			<div className={styles.content}>
				<h1 className={styles.header}>
					Build a team <br />
					in minutes!
				</h1>
				<p className={styles.text}>
					Find a dirrect link to some of the best developers and <br />{' '}
					designers out there!
				</p>
				<div className={styles.input}>
					<p className={styles.description}>
						View user profiles and elect your provider.
					</p>
					<Button text='Explore Now' />
				</div>
			</div>
			<img className={styles.landing_img} alt='a yellow flower' src={Flower} />
		</div>
		</>
	);
};

export default LandingPage;
