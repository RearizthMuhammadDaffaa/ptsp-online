import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SyaratBerperkara from '../pages/SyaratBerperkara';

test('menampilkan List syarat berperkara dari API', () => {
  render(
    <MemoryRouter>
      <SyaratBerperkara />
    </MemoryRouter>
  );

  expect(
    screen.getByText(/Syarat Berperkara/i)
  ).toBeInTheDocument();
});
