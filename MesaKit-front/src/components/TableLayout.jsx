import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';

const tables = [
  { id: 1, label: 'Mesa 1', seats: 2 },
  { id: 2, label: 'Mesa 2', seats: 4 },
  { id: 3, label: 'Mesa 3', seats: 4 },
  { id: 4, label: 'Mesa 4', seats: 6 },
  { id: 5, label: 'Mesa 5', seats: 2 },
  { id: 6, label: 'Mesa 6', seats: 8 },
];

const TableLayout = ({ selectedTable, onSelectTable }) => {
  return (
    <Box sx={{ mt: 4, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Selecciona tu mesa
      </Typography>
      <Grid container spacing={2}>
        {tables.map((table) => {
          const isSelected = selectedTable === table.id;

          return (
            <Grid item xs={4} sm={3} key={table.id}>
              <Button
                fullWidth
                onClick={() => onSelectTable(table.id)}
                sx={{
                  height: 60,
                  border: '2px solid',
                  borderColor: isSelected
                    ? 'rgba(255, 140, 0, 0.83)'
                    : 'rgba(87, 92, 82, 0.8)',
                  backgroundColor: isSelected
                    ? 'rgb(194, 109, 5)'
                    : 'transparent',
                  color: 'white',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: isSelected
                      ? 'rgb(212, 121, 9)'
                      : 'rgba(31, 68, 44, 0.5)',
                    borderColor: isSelected ? '#FB8C00' : '#2E7D32',
                  },
                }}
                aria-pressed={isSelected}
              >
                {table.label} ({table.seats} Personas)
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TableLayout;

