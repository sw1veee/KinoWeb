import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Stack
      component="footer"
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        flexDirection: { sm: 'row' },
        justifyContent: { sm: 'space-between' },
        alignItems: { sm: 'center' },
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} &laquo;KinoWeb&raquo; 18+ <br />
        Данный сайт создали исключительно в обущающих целях. <br />
        Все права принадлежат правообладателям.
        <br />
        Жуков Д.И. и Ахметханова П.А.
        <br />
      </Typography>

      <Typography variant="h2" color="primary.main">
        KinoWeb
      </Typography>
    </Stack>
  );
}
