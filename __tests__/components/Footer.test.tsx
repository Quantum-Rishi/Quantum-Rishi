import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/Footer';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('Footer', () => {
  it('renders the footer component', () => {
    render(<Footer />);
    
    // Check that the footer element exists
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('displays the Quantum Rishi brand', () => {
    render(<Footer />);
    
    // Check for brand name
    const brandName = screen.getByText('Quantum Rishi');
    expect(brandName).toBeInTheDocument();
  });

  it('displays company description', () => {
    render(<Footer />);
    
    // Check for description text
    const description = screen.getByText(/Building the world's most trusted sovereign infrastructure/i);
    expect(description).toBeInTheDocument();
  });

  it('displays footer link categories', () => {
    render(<Footer />);
    
    // Check for main categories
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Legal')).toBeInTheDocument();
  });

  it('displays social media links', () => {
    render(<Footer />);
    
    // Check for social link labels
    const socialLinks = [
      screen.getByLabelText('GitHub'),
      screen.getByLabelText('Twitter'),
      screen.getByLabelText('LinkedIn'),
      screen.getByLabelText('YouTube'),
    ];
    
    socialLinks.forEach(link => {
      expect(link).toBeInTheDocument();
    });
  });

  it('displays copyright information', () => {
    render(<Footer />);
    
    // Check for copyright
    const copyright = screen.getByText(/© 2025 Quantum Rishi/i);
    expect(copyright).toBeInTheDocument();
  });

  it('has newsletter signup section', () => {
    render(<Footer />);
    
    // Check for newsletter elements
    expect(screen.getByText('Stay updated')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument();
  });

  it('displays Telegram link', () => {
    render(<Footer />);
    
    // Check for Telegram link
    const telegramLink = screen.getByText('Join us on Telegram');
    expect(telegramLink).toBeInTheDocument();
  });

  it('has proper accessibility with semantic footer element', () => {
    const { container } = render(<Footer />);
    
    // Check for semantic footer element
    const footerElement = container.querySelector('footer');
    expect(footerElement).toBeInTheDocument();
  });

  it('displays community highlights section', () => {
    render(<Footer />);
    
    // Check for community section
    expect(screen.getByText('Community highlights')).toBeInTheDocument();
  });
});
