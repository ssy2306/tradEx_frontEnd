import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const TopVolumesTable = ({ topVolumes }) => {
  return (
    <div>
      <Typography variant="h6">Top 5 Last Traded Volumes</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="top-volumes-table">
          <TableHead>
            <TableRow>
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
    </div>
  );
};

export default TopVolumesTable;
