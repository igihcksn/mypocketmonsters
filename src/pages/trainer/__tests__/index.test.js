import React from 'react';
import { render, screen } from '@testing-library/react';
import TrainerDetails from '../';

test('renders learn react link', () => {
  render(<TrainerDetails />);
  const TrainerLabel = screen.getByText(/Trainer Information/i);
  expect(TrainerLabel).toBeInTheDocument();
});
