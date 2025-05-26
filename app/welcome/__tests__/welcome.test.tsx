import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MockWelcome } from './welcome.mock';

describe('Welcome component', () => {
  it('renders the welcome message', () => {
    const testMessage = 'Test message from Cloudflare';
    
    render(<MockWelcome message={testMessage} />);
    
    // Check if the message is rendered
    expect(screen.getByText(testMessage)).toBeInTheDocument();
    
    // Check if the "What's next?" text is rendered
    expect(screen.getByText("What's next?")).toBeInTheDocument();
    
    // Check if the links are rendered
    expect(screen.getByText('React Router Docs')).toBeInTheDocument();
    expect(screen.getByText('Join Discord')).toBeInTheDocument();
  });
});
