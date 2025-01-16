import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('renders the Queuetie text', () => {
    render(<App />);
    expect(screen.getByText('Queuetie')).toBeInTheDocument();
  });
});
