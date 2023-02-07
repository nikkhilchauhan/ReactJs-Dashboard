import { Card } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

import LinkIcon from '@mui/icons-material/Link';

const ProductView = () => (
    <MainCard title="Product Management" secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://docmantra.com/" />}>
        <Card sx={{ overflow: 'hidden' }}>
            <h1>Product View</h1>
        </Card>
    </MainCard>
);

export default ProductView;
