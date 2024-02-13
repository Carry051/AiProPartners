/** @format */

import Sidebar from '../../components/Sidebar';
import styles from './private-layout.module.scss';

const PrivateLayout = ({ children }) => {
	return (
		<div className={styles.private__layout}>
			<Sidebar isLeftSidebar />
			{children}
			<Sidebar />
		</div>
	);
};

export default PrivateLayout;
