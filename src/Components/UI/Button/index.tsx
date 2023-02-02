import classNames from 'classnames';
import styles from './Button.module.scss';

type ButtonProps = {
	text: string;
	dark?: boolean;
};

const Button = ({ text, dark }: ButtonProps) => {
	return (
		<button
			className={classNames(styles.btn, {
				[styles.dark]: dark,
			})}
		>
			{text}
		</button>
	);
};

export default Button;
