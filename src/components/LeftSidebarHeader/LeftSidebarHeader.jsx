/** @format */

import React from 'react';
import Logo from '../common/Logo';
import TelegramLink from '../common/TelegramLink';
import styles from './left-sidebar-header.module.scss';

const LeftSidebarHeader = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Logo />
				<h1 className={styles.logo__text}>
					AIPRO <span>PARTNERS</span>
				</h1>
			</div>
			<TelegramLink />
		</header>
	);
};

export default LeftSidebarHeader;
