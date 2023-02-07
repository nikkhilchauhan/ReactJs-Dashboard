// assets
import { IconUser } from '@tabler/icons';

// constant
const icons = {
    IconUser
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const patient = {
    id: 'patient',
    title: 'Manage',
    caption: '',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Patient',
            type: 'collapse',
            icon: icons.IconUser,

            children: [
                {
                    id: 'login3',
                    title: 'Admitted',
                    type: 'item',
                    url: '/patient/admitted',
                    breadcrumbs: false,
                    target: false
                },
                {
                    id: 'register3',
                    title: 'Discharged',
                    type: 'item',
                    url: '/patient/discharged',
                    breadcrumbs: false,
                    target: false
                }
            ]
        }
    ]
};

export default patient;
