import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import EditTableRow from '../material-kit/tables/EditTableRow';

const AppTable = Loadable(lazy(() => import('./tables/AppTable')));

const userRoutes = [
  {
    path: '/users/table',
    element: <AppTable />,
  },
  {
    path: '/users/edit',
    element: <EditTableRow />,
  },
];

export default userRoutes;
