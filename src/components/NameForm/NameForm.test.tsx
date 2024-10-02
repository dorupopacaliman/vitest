import { describe, expect, it, vi } from 'vitest';
import NameForm from './NameForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('NameForm component', () => {
  it('Should call onSubmit when the form is submitted', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();
    
    render(<NameForm onSubmit={onSubmit} />);

    const name = 'Doru';
    const nameInput = screen.getByLabelText(/Name/i);
    const submitBtn = screen.getByText(/Submit/i);

    await user.clear(nameInput);
    await user.click(submitBtn);

    expect(onSubmit).not.toHaveBeenCalled();

    await user.type(nameInput, name);
    await user.click(submitBtn);

    expect(onSubmit).toHaveBeenCalledOnce();
    expect(onSubmit).toHaveBeenCalledWith(name);
  });
});
 