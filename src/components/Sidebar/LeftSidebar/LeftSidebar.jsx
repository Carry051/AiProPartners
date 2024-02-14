/** @format */

import Logo from '../../common/Logo';
import styles from './left-sidebar.module.scss';

const LeftSidebar = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.logo}>
					<Logo />
					<h1 className={styles.logo__text}>
						AIPRO <span>PARTNERS</span>
					</h1>
				</div>
				Link
			</header>
		</>
	);
};

export default LeftSidebar;
