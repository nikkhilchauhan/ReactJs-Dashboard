// assets
import { IconBuildingStore } from '@tabler/icons';

// constant
const icons = {
    IconBuildingStore
};

const inventory = {
    id: 'inventory',
    title: 'Others',
    type: 'group',
    caption: '',
    children: [
        {
            id: 'icons',
            title: 'Inverntory',
            type: 'collapse',
            icon: icons.IconBuildingStore,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Products',
                    type: 'item',
                    url: '/inventory/product',
                    breadcrumbs: false,
                    target: false
                },
                {
                    id: 'material-icons',
                    title: 'Rooms & Beds',
                    type: 'item',
                    url: '/inventory/room-bed',
                    breadcrumbs: false,
                    target: false
                }
            ]
        }
    ]
};

export default inventory;
