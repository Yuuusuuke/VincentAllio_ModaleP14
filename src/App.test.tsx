import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders modal', () => {
  render(<App />);
  const linkElement: HTMLElement = screen.getByText(/Employee Created/i);
  expect(linkElement).toBeInTheDocument();
});

test('close modal from close button', () => {
  render(<App />);
  const button: HTMLElement = screen.getByText('X');

  fireEvent.click(button);
  expect(screen.queryByText(/Employee Created/i)).not.toBeInTheDocument();
});

test("close modal from outside click", () => {
  render(<App />);
  const smoke: HTMLElement = screen.getByTestId("smoke");
  
  fireEvent.click(smoke);
  expect(screen.queryByText(/Employee Created/i)).not.toBeInTheDocument();
})
