/** @format */

import LeftSidebar from '../../components/LeftSidebar';
import RightSidebar from '../../components/RightSidebar';
import styles from './private-layout.module.scss';

const PrivateLayout = ({ children }) => {
	return (
		<div className={styles.private__layout}>
			<LeftSidebar />
			{children}
			<RightSidebar />
		</div>
	);
};

export default PrivateLayout;
