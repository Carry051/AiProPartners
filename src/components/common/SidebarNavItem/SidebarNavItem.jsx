/** @format */
import { NavLink } from 'react-router-dom';
import styles from './sidebar-nav-item.module.scss';

const SidebarNavItem = ({ href, icon, name }) => {
	return (
		<NavLink to={href} className={styles.nav__item}>
			{icon}
			{name}
		</NavLink>
	);
};

export default SidebarNavItem;
