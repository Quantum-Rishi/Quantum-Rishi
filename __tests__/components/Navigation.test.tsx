import { render, screen } from '@testing-library/react';
import Navigation from '@/components/Navigation';

describe('Navigation', () => {
  it('renders the navigation component', () => {
    render(<Navigation />);
    
    // Check that the navigation element exists
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('displays the Quantum Rishi brand name', () => {
    render(<Navigation />);
    
    // Check that the brand name is present
    const brandName = screen.getByText('Quantum Rishi');
    expect(brandName).toBeInTheDocument();
  });

  it('has proper styling classes', () => {
    render(<Navigation />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('bg-gray-800');
    expect(nav).toHaveClass('text-white');
  });

  it('is accessible with proper semantic HTML', () => {
    const { container } = render(<Navigation />);
    
    // Check that it uses semantic nav element
    const navElement = container.querySelector('nav');
    expect(navElement).toBeInTheDocument();
  });
});
