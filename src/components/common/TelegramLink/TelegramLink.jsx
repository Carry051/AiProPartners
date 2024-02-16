/** @format */
import styles from './telegram-link.module.scss';
import { ReactComponent as TelegramIcon } from '/src/assets/images/socialLinks/telegram.svg';

const TelegramLink = () => {
	return (
		<div className={styles.link__wrapper}>
			<span>Ваш персональный менеджер</span>
			<a className={styles.link} href='https://t.me/aipro_manager'>
				<TelegramIcon />
				@aipro_manager
			</a>
		</div>
	);
};

export default TelegramLink;
