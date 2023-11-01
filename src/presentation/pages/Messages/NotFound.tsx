import { useRedirect } from 'react-admin';
import { Button, Stack, Typography } from '@mui/material';

const NotFound = () => {
  const redirect = useRedirect();

  const handleClick = () => {
    redirect('/');
  };

  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      padding={10}
      sx={{
        height: '-webkit-fill-available',
      }}
    >
      <Typography variant='h3' color='primary'>
        This page is not available
      </Typography>
      <Typography variant='h6' color='black' align='center' width='50%'>
        The link may be broken or the page may have been removed. Verify that
        the link you want to open is correct.
      </Typography>
      <Button variant='contained' onClick={handleClick}>
        Go home
      </Button>
    </Stack>
  );
};

export default NotFound;
