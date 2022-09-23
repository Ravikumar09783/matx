import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import AddTableRow from '../material-kit/tables/AddTableRow';
import EditTableRow from '../material-kit/tables/EditTableRow';

const AppTable = Loadable(lazy(() => import('./tables/AppTable')));

const userRoutes = [
  {
    path: '/users/table',
    element: <AppTable />,
  },
  {
    path: '/users/add',
    element: <AddTableRow />,
  },
  {
    path: '/users/edit/:id',
    element: <EditTableRow />,
  },
];

export default userRoutes;
