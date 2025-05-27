import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { MockWelcome } from './welcome.mock';

describe('Welcome component', () => {
  it('renders the welcome message', async () => {
    const testMessage = 'Test message from Cloudflare';
    
    const screen = render(<MockWelcome message={testMessage} />);
    
    // Check if the message is rendered
    await expect.element(screen.getByText(testMessage)).toBeInTheDocument();
    
    // Check if the "What's next?" text is rendered
    await expect.element(screen.getByText("What's next?")).toBeInTheDocument();
    
    // Check if the links are rendered
    await expect.element(screen.getByText('React Router Docs')).toBeInTheDocument();
    await expect.element(screen.getByText('Join Discord')).toBeInTheDocument();
  });
});
