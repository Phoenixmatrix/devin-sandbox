import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { Button } from '../Button';

describe('Button component', () => {
  it('renders with the correct label', async () => {
    const screen = render(<Button label="Click me" />);
    
    await expect.element(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    const screen = render(<Button label="Click me" onClick={handleClick} />);
    
    await screen.getByTestId('button').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies primary styling when primary prop is true', async () => {
    const screen = render(<Button label="Primary Button" primary={true} />);
    const button = screen.getByTestId('button');
    
    await expect.element(button).toHaveClass('bg-blue-600');
  });
});
