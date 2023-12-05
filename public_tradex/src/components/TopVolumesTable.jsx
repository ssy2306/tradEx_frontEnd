import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const TopVolumesTable = ({ topVolumes }) => {
  return (
    <Box sx={{ }}>
      <Typography variant="h6" style={{ color: 'white', paddingBottom: 10 }}>Top 5 Last Traded Volumes</Typography>
      <TableContainer component={Paper} sx={{ backgroundColor: 'white', color: 'white',
               border:'none',
               borderRadius: 2}}>
        <Table aria-label="top-volumes-table">
          <TableHead sx={{
        border: 0
            }}>
            <TableRow  >
              <TableCell  sx={{
                bgcolor: '#0D1117',
                color : 'white',border:0,}}>Base</TableCell>
              <TableCell  sx={{
                bgcolor: '#0D1117',
                color : 'white',border:0,}}>Target</TableCell>
              <TableCell  sx={{
                bgcolor: '#0D1117',
                color : 'white',border:0,}}>Last Price</TableCell>
              <TableCell  sx={{
                bgcolor: '#0D1117',
                color : 'white',border:0,}}>Volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topVolumes.map((row, index) => (
              <TableRow key={index}>
                <TableCell  sx={{
                bgcolor: '#121212',
                color : 'white',border:0,}}>{row.base}</TableCell>
                <TableCell  sx={{
                bgcolor: '#121212',
                color : 'white',border:0,}}>{row.target}</TableCell>
                <TableCell  sx={{
                bgcolor: '#121212',
                color : 'white',border:0,}}>{row.last}</TableCell>
                <TableCell  sx={{
                bgcolor: '#121212',
                color : 'white',border:0,}}>{row.volume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopVolumesTable;
