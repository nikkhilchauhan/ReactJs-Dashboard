import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// routing imports
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const AdmittedView = Loadable(lazy(() => import('views/manage/patient/AdmittedView/AdmittedView')));
const DischargedView = Loadable(lazy(() => import('views/manage/patient/DischargedView/DischargedView')));
const ProductView = Loadable(lazy(() => import('views/others/inventory/ProductView/ProductView')));
const RoomBedView = Loadable(lazy(() => import('views/others/inventory/RoomBedView/RoomBedView')));

// ==============================|| MAIN ROUTING ||============================== //

const ViewRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/patient/admitted',
            element: <AdmittedView />
        },
        {
            path: '/patient/discharged',
            element: <DischargedView />
        },
        {
            path: '/inventory/product',
            element: <ProductView />
        },
        {
            path: '/inventory/room-bed',
            element: <RoomBedView />
        }
    ]
};

export default ViewRoutes;
