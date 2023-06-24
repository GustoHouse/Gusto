import { render, screen } from '@testing-library/react';
import Gusto from './Gusto';

test('renders learn react link', () => {
  render(<Gusto />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
