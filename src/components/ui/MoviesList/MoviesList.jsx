import { Pagination, Stack } from '@mui/material';
import React from 'react';

import MovieCard from '../MovieCard/MovieCard';

export default function MoviesList({ movies, totalPages, page, setPage }) {
  console.log(movies);
  return (
    <>
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {movies.map(movie => (
          <MovieCard key={movie.kinopoiskId} movie={movie} />
        ))}
      </Stack>
      <Stack alignItems="center">
        <Pagination
          sx={{ mt: 2, mb: 2 }}
          count={totalPages}
          color="primary"
          variant="outlined"
          shape="circular"
          size="large"
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      </Stack>
    </>
  );
}
