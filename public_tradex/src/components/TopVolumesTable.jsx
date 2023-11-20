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
    <Box>
      <Typography variant="h6" style={{ color: 'white' }}>Top 5 Last Traded Volumes</Typography>
      <TableContainer component={Paper} sx={{ backgroundColor: 'white', color: 'white' }}>
        <Table aria-label="top-volumes-table">
          <TableHead sx={{
              bgcolor: 'black',
              color : 'white',
              border: 2,
              borderRadius: 10,
            }}>
            <TableRow sx={{
              color: 'black'
            }}>
              <TableCell>Base</TableCell>
              <TableCell>Target</TableCell>
              <TableCell>Last Price</TableCell>
              <TableCell>Volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topVolumes.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.base}</TableCell>
                <TableCell>{row.target}</TableCell>
                <TableCell>{row.last}</TableCell>
                <TableCell>{row.volume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopVolumesTable;
