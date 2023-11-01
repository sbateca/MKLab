import { Typography } from '@mui/material';
import { ReportsTable } from '../../molecules/Tables/ReportTable';
import { Stack } from '@mui/system';

export const SampleReports = () => {
    return (
        <Stack spacing={2} sx={{marginTop: '10px'}}>
            <Typography variant='h5'>Reportes de ensayos</Typography>
            <ReportsTable />
        </Stack>
    )
};