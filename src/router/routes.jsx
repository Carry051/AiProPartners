/** @format */
import Charts from '../pages/Charts/Charts';
import Landing from '../pages/Landing/Landing';
import PathConstants from './pathConstants';

const routes = [
	{
		path: PathConstants.HOME,
		element: <Landing />,
		// TODO: Add Landing router component.
	},

	{
		path: PathConstants.DASHBOARD,
		element: <Charts />,
	},
	{
		path: PathConstants.SUBACCOUNT,
		// element: <Profile />,
	},
];

export default routes;
