import { render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/HeroSection';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

describe('HeroSection', () => {
  it('renders the hero section', () => {
    const { container } = render(<HeroSection />);
    
    // Check that the section exists
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('displays the main headline', () => {
    render(<HeroSection />);
    
    // Check for the main heading
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toContain('Autonomous teams');
  });

  it('displays the beta badge', () => {
    render(<HeroSection />);
    
    // Check for beta indicator
    const betaText = screen.getByText(/Now in Private Beta/i);
    expect(betaText).toBeInTheDocument();
  });

  it('displays call-to-action buttons', () => {
    render(<HeroSection />);
    
    // Check for CTA buttons
    const requestDemoButton = screen.getByText('Request Demo');
    const joinEcosystemButton = screen.getByText('Join Ecosystem');
    
    expect(requestDemoButton).toBeInTheDocument();
    expect(joinEcosystemButton).toBeInTheDocument();
  });

  it('displays stats section', () => {
    render(<HeroSection />);
    
    // Check for stats
    expect(screen.getByText('99.9%')).toBeInTheDocument();
    expect(screen.getByText('Uptime SLA')).toBeInTheDocument();
    expect(screen.getByText('< 50ms')).toBeInTheDocument();
    expect(screen.getByText('Latency')).toBeInTheDocument();
    expect(screen.getByText('SOC 2')).toBeInTheDocument();
    expect(screen.getByText('Compliant')).toBeInTheDocument();
  });

  it('has proper accessibility structure', () => {
    const { container } = render(<HeroSection />);
    
    // Check for semantic section element
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
    
    // Check for heading hierarchy
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
  });
});
