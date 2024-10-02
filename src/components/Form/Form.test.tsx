import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import RefForm from './RefForm';
import StateForm from './StateForm';

const test1 = (Component: React.ComponentType<{ onSubmit: (data: { email: string; password: string }) => void }>) => {
  return it('error messages are not displayed when submitting a valid form and the onSubmit function is called with correct data', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();

    render(<Component onSubmit={onSubmit} />);

    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const submitBtn = screen.getByText(/Submit/i);

    const email = 'doru@gmail.com';
    const password = '1Dasfg23fs';

    await user.type(emailInput, email);
    await user.type(passwordInput, password);
    await user.click(submitBtn);

    const emailErrors = screen.queryByTestId('email-errors');
    const passwordErrors = screen.queryByTestId('password-errors');

    expect(emailErrors).not.toBeInTheDocument();
    expect(passwordErrors).not.toBeInTheDocument();

    expect(onSubmit).toHaveBeenCalledOnce();
    expect(onSubmit).toHaveBeenCalledWith({ email, password });
  });
};

const test2 = (Component: React.ComponentType<{ onSubmit: (data: { email: string; password: string }) => void }>) => {
  return it('error messages are displayed when submitting an invalid form and the onSubmit function is not called', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();

    render(<Component onSubmit={onSubmit} />);

    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const submitBtn = screen.getByText(/Submit/i);

    const email = 'doru@wrongemail.com';
    const password = 'wrongpassword';

    await user.type(emailInput, email);
    await user.type(passwordInput, password);
    await user.click(submitBtn);

    const emailErrors = screen.getByTestId('email-errors');
    const passwordErrors = screen.getByTestId('password-errors');

    expect(emailErrors).toBeInTheDocument();
    expect(passwordErrors).toBeInTheDocument();

    expect(onSubmit).not.toHaveBeenCalledWith({ email, password });
  });
};

const test3 = (Component: React.ComponentType<{ onSubmit: (data: { email: string; password: string }) => void }>) => {
  return it('error messages update when the user changes the input values after the first submit', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();

    render(<Component onSubmit={onSubmit} />);

    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const submitBtn = screen.getByText(/Submit/i);

    await user.type(emailInput, 'doru@wrongemail.com');
    await user.type(passwordInput, 'wrongpassword');
    await user.click(submitBtn);

    expect(onSubmit).not.toHaveBeenCalled();

    const emailErrors = screen.queryByTestId('email-errors')?.textContent;
    const passwordErrors = screen.queryByTestId('password-errors')?.textContent;

    await user.clear(emailInput);
    await user.clear(passwordInput);
    await user.type(passwordInput, 'differentPassword');

    const newEmailErrors = screen.queryByTestId('email-errors')?.textContent;
    const newPasswordErrors = screen.queryByTestId('password-errors')?.textContent;

    expect(emailErrors).not.toEqual(newEmailErrors);
    expect(passwordErrors).not.toEqual(newPasswordErrors);
  });
};

describe('StateForm component', () => {
  test1(StateForm);
  test2(StateForm);
  test3(StateForm);
});

describe('RefForm component', () => {
  test1(RefForm);
  test2(RefForm);
  test3(RefForm);
});
