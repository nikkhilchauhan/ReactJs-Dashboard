import { Card } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// assets
import LinkIcon from '@mui/icons-material/Link';

const RoomBedView = () => (
    <MainCard
        title="Rooms & Beds Management"
        secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://docmantra.com/" />}
    >
        <Card sx={{ overflow: 'hidden' }}>
            <h1>Beds & Rooms View</h1>
        </Card>
    </MainCard>
);

export default RoomBedView;
