import { CircularProgress } from '@mui/material';
import { Box } from '@mui/material';


export const IsLoading = () => {
  
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p:10 }}>
      <CircularProgress />
    </Box>
  );
}
