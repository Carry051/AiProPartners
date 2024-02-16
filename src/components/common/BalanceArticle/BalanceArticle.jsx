/** @format */

import styles from './balance-article.module.scss';

const BalanceArticle = () => {
	return (
		<article className={styles.balance}>
			<span className={styles.balance__emblem}>$</span>
			<p className={styles.balance__text}>
				Текущий баланс <span id='currentCash'>1000.00</span>
			</p>
		</article>
	);
};

export default BalanceArticle;
