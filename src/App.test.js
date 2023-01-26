import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headerElement = screen.getByText(/Locate A Pinball Machine/i);
  expect(headerElement).toBeInTheDocument();
});
