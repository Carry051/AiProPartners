/** @format */
import Charts from '../pages/Charts/Charts';
import Profile from '../pages/Profile/Profile';
import PathConstants from './pathConstants';

const routes = [
	{
		path: PathConstants.HOME,
		// element: <Landing />,
		// TODO: Add Landing router component.
	},

	{
		path: '/dashboard',
		element: <Charts />,
	},
	{
		path: PathConstants.SUBACCOUNT,
		element: <Profile />,
	},
];

export default routes;
