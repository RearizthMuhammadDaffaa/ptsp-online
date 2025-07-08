// tests/Syarat.test.jsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Syarat from '../components/syarat/Syarat';
import axios from 'axios';
import React from 'react';

vi.mock('axios');

// Mock ModalSyarat agar tidak error saat render
vi.mock('../components/syarat/ModalSyarat', () => ({
  default: ({ id }) => <div data-testid={`modal-${id}`}>Modal for {id}</div>
}));

describe('Syarat Component', () => {
  const dummyData = [
    { id_perkara: 1, name: 'Cerai Talak' },
    { id_perkara: 2, name: 'Ahli Waris' }
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: dummyData });
  });

  it('renders list Perkara dari API', async () => {
    render(<Syarat />);

    
    await waitFor(() => {
      expect(screen.getByText('Cerai Talak')).toBeInTheDocument();
      expect(screen.getByText('Ahli Waris')).toBeInTheDocument();
    });

    
    expect(screen.getByTestId('modal-1')).toBeInTheDocument();
    expect(screen.getByTestId('modal-2')).toBeInTheDocument();
  });
});
