/** @format */

import SidebarNavMenu from '../../SidebarNavMenu';
import SocialLinksList from '../../SocialLinksList';
import LeftSidebarHeader from './LeftSidebarHeader';

const LeftSidebar = () => {
	return (
		<>
			<LeftSidebarHeader />
			<SidebarNavMenu />
			<SocialLinksList />
		</>
	);
};

export default LeftSidebar;
