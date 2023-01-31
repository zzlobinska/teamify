import styles from './Button.module.scss';

const Button = (props: { text: string }) => {
	return <button className={styles.btn}>{props.text}</button>;
};

export default Button;
