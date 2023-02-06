import { Card } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

const ProductView = () => (
    <MainCard title="Product Management" secondary={<SecondaryAction link="https://docmantra.com/" />}>
        <Card sx={{ overflow: 'hidden' }}>
            <h1>Product View</h1>
        </Card>
    </MainCard>
);

export default ProductView;
