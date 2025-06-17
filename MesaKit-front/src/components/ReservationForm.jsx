import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import TableLayout from './TableLayout';

const ReservationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    table: null,
  });

  const [reservaConfirmada, setReservaConfirmada] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectTable = (tableId) => {
    setFormData((prev) => ({
      ...prev,
      table: tableId,
    }));
  };

  const handleNuevaReserva = () => {
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      people: '',
      table: '',
    });
    setReservaConfirmada(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.people) {
      alert('Por favor, llena todos los campos');
      return;
    }
    console.log('Reserva confirmada:', formData);
    setReservaConfirmada(true);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 4, mt: 5 }}>
      {!reservaConfirmada ? (
        <Box component="form" onSubmit={handleSubmit}>
          <Typography variant="h5" gutterBottom>
            Reserva tu mesa
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Nombre y apellido"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                required
                sx={{
                  input: { color: 'rgba(255, 255, 255, 0.57)' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#rgba(212, 127, 0, 0.5)' },
                    '&:hover fieldset': { borderColor: 'rgba(212, 127, 0, 0.5)' },
                    '&.Mui-focused fieldset': { borderColor: 'rgba(212, 127, 0, 0.5)' },
                  },
                  '& label': { color: 'beige' },
                  '& label.Mui-focused': { color: 'rgb(179, 140, 14)' },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="phone"
                label="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                required
                sx={{
                  input: { color: 'rgba(255, 255, 255, 0.57)' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#rgba(212, 127, 0, 0.5)' },
                    '&:hover fieldset': { borderColor: 'rgba(212, 127, 0, 0.5)' },
                    '&.Mui-focused fieldset': { borderColor: 'rgba(212, 127, 0, 0.5)' },
                  },
                  '& label': { color: 'beige' },
                  '& label.Mui-focused': { color: 'rgb(179, 140, 14)' },
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="date"
                label="Fecha"
                type="date"
                fullWidth
                value={formData.date}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
                sx={{
                  width: 250,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.25)' },
                    '&:hover fieldset': { borderColor: 'rgba(212, 127, 0, 0.7)' },
                    '&.Mui-focused fieldset': { borderColor: 'rgba(212, 127, 0, 1)' },
                    backgroundColor: '#rgba(138, 255, 22, 0.8)',
                  },
                  '& input': { color: 'beige' },
                  '& label': { color: 'beige' },
                  '& label.Mui-focused': { color: 'rgb(179, 140, 14)' },
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="time"
                label="Hora"
                type="time"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={formData.time}
                onChange={handleChange}
                required
                sx={{
                  width: 150,
                  input: { color: 'rgba(255, 255, 255, 0.57)' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#rgba(212, 127, 0, 0.5)' },
                    '&:hover fieldset': { borderColor: 'rgba(212, 127, 0, 0.5)' },
                    '&.Mui-focused fieldset': { borderColor: 'rgba(212, 127, 0, 0.5)' },
                  },
                  '& label': { color: 'beige' },
                  '& label.Mui-focused': { color: 'rgb(179, 140, 14)' },
                  '& input': { color: 'beige' },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="people"
                label="Número de personas"
                select
                fullWidth
                value={formData.people}
                onChange={handleChange}
                required
                sx={{
                  width: 205,
                  input: { color: 'rgba(255, 255, 255, 0.57)' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#rgba(212, 127, 0, 0.5)' },
                    '&:hover fieldset': { borderColor: 'rgba(212, 127, 0, 0.5)' },
                    '&.Mui-focused fieldset': { borderColor: 'rgba(212, 127, 0, 0.5)' },
                    '& .MuiSelect-select': { color: 'beige' },
                  },
                  '& label': { color: 'beige' },
                  '& label.Mui-focused': { color: 'rgb(179, 140, 14)' },
                  InputLabelProps: { shrink: true },
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <MenuItem key={num} value={num}>
                    {num}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <TableLayout selectedTable={formData.table} onSelectTable={handleSelectTable} />

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-start' }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                width: 100,
                height: 40,
                backgroundColor: 'rgb(78, 40, 6)',
                '&:hover': { backgroundColor: 'rgb(194, 109, 5)' },
              }}
            >
              Reservar
            </Button>
          </Box>
        </Box>
      ) : (
        <>
          <Typography variant="h5" sx={{ mt: 4, color: '#4CAF50', textAlign: 'center' }}>
            ¡Gracias {formData.name}! Tu reserva para {formData.people} persona(s) ha sido registrada
            para el {formData.date} a las {formData.time}.
          </Typography>

          <Box textAlign="center" mt={3}>
            <Button
              variant="outlined"
              onClick={handleNuevaReserva}
              sx={{
                borderColor: '#FF9800',
                color: '#FF9800',
                '&:hover': {
                  backgroundColor: 'rgba(255, 152, 0, 0.1)',
                  borderColor: '#fb8c00',
                  color: '#fb8c00',
                },
              }}
            >
              Hacer otra reserva
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ReservationForm;
