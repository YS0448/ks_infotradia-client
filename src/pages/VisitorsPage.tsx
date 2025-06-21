import React, { useEffect, useState } from 'react';
import apiCall from '../services/apiServices';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TablePagination
} from '@mui/material';
import '../assets/style/visitorsPage.css'


const MuiTable = () => {
  const [visitors, setVisitors] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const columns = ['S.No.', 'IP Address', 'Visited Date & Time'];

  const fetchVisitors = async () => {
    try {
      const offset = page * rowsPerPage;
      const endpoint = `/api/visitors?offset=${offset}&limit=${rowsPerPage}`;
      const data = await apiCall({ endpoint, method: 'GET' });

      setVisitors(data.visitors || []);
      setTotalCount(data.total || 100);
    } catch (err) {
      console.error('Error fetching visitors:', err);
    }
  };

  useEffect(() => {
    fetchVisitors();
  }, [page, rowsPerPage]);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const formatDateTime = (isoString: string) => {
    const date = new Date(isoString);
    const pad = (n: number) => String(n).padStart(2, '0');

    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = String(date.getFullYear()).slice(-2);
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <section className="pt-32 pb-20 bg-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Visitors</h1>
          </div>
        </div>
      </section>

      <div className="mb-4">
        <div className='search-date-wrapper'>
          <label htmlFor="search-date" className="search-date-label">
             Search by Date:
           </label>
           <input
             id="search-date"
             type="date"
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="search-date-input"
             title="Search by date"
             placeholder="Select date"
           />
        </div>

        <TableContainer
          component={Paper}
          sx={{
            maxWidth: 700,
            margin: 'auto',
            mt: 5,
          }}
        >


          {/* Scrollable Body */}
          <div style={{ height: 300, overflowY: 'auto' }}>
            <Table size="small" stickyHeader >
              <TableHead>
              <TableRow>
                {columns.map((col, index) => (
                  <TableCell
                    key={index}
                    sx={{ fontWeight: 'bold', backgroundColor: '#0f4c81', color: 'white' }}
                  >
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

              <TableBody>
                {visitors
                  .filter((row) => {
                    if (!searchTerm) return true;
                    const rowDate = new Date(row.createdAt).toISOString().split('T')[0];
                    return rowDate === searchTerm;
                  })
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                      <TableCell>{row.ip}</TableCell>
                      <TableCell>{formatDateTime(row.createdAt)}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <TablePagination
            component="div"
            count={totalCount}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </TableContainer>
      </div>
    </>
  );
};

export default MuiTable;
