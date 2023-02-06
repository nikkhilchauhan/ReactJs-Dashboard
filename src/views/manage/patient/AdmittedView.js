import { Card } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

const AdmittedView = () => (
    <MainCard title="Admitted Patients" secondary={<SecondaryAction link="https://docmantra.com/" />}>
        <Card sx={{ overflow: 'hidden' }}>
            <h1>Admitted View</h1>
        </Card>
    </MainCard>
);

export default AdmittedView;
