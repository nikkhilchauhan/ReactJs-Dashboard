// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.IconDashboard,
            breadcrumbs: false,
            target: false
        }
    ]
};

export default dashboard;
