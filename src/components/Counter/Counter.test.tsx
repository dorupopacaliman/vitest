import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Counter from './Counter';

describe('Counter component', () => {
  it('should render the initial count', () => {
    render(<Counter initialCount={3} />);
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('should increment/decrement when clicking the +/- buttons', async () => {
    const user = userEvent.setup();

    render(<Counter initialCount={3} />);
    const plusBtn = screen.getByText('+');
    const minusBtn = screen.getByText('-');

    await user.click(minusBtn);
    expect(screen.getByTestId('count')).toHaveTextContent('2');
    await user.click(plusBtn);
    expect(screen.getByTestId('count')).toHaveTextContent('3');
  });
});
