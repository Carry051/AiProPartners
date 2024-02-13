/** @format */

import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import styles from './sidebar.module.scss';

const Sidebar = (props) => {
	return (
		<div className={styles.sidebar__wrapper}>
			{props.isLeftSidebar ? <LeftSidebar /> : <RightSidebar />}
		</div>
	);
};

export default Sidebar;
