import styles from './InfoBox.module.scss'

type InfoProps = {
    title: string;
    text: string;
}

const InfoBox = (props: InfoProps) => {
	return (
		<div className={styles.box}>
			<h3 className={styles.title}>{props.title}</h3>
			<p className={styles.text}>{props.text}</p>
		</div>
	);
};

export default InfoBox
