import { AppBar } from 'react-admin';
import {
    Typography, Stack,
  } from '@mui/material';

export const CustomBar = () => {
    return (<AppBar>
      <Stack spacing={0} sx={{ width: '100%' }}>
        <Typography component='p'>
          Microlab MK S.A.S.
        </Typography>
      </Stack>
    </AppBar>);
};