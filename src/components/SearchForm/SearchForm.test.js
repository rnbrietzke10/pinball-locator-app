import { render, screen } from '@testing-library/react';
import SearchForm from '../SearchForm';

it('renders form with input for longitude and latitude', () => {
  render(<SearchForm />);
  const labelLongitude = screen.getByText(/longitude/i);
  expect(labelLongitude).toBeInTheDocument();
  const labelLatitude = screen.getByText(/latitude/i);
  expect(labelLatitude).toBeInTheDocument();
});
