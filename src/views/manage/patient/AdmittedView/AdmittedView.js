import { Card } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

import LinkIcon from '@mui/icons-material/Link';

const AdmittedView = () => (
    <MainCard title="Admitted Patients" secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://docmantra.com/" />}>
        <Card sx={{ overflow: 'hidden' }}>
            <h1>Admitted View</h1>
        </Card>
    </MainCard>
);

export default AdmittedView;
