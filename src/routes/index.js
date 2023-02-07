import { useRoutes } from 'react-router-dom';

// routes
import ViewRoutes from './ViewRoutes';
import PageRoutes from './PageRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([ViewRoutes, PageRoutes]);
}
