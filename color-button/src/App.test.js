import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />)
  let colorButton = screen.getByRole('button',{name: 'Change to blue'})
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
});

test('button has correct initial text', () => {
  render(<App />)
  let colorButton = screen.getByRole('button')
  expect(colorButton).toHaveAccessibleName('Change to blue')
});

test('button turns blue when clicked', () => {
  render(<App />)
  let colorButton = screen.getByRole('button')
  fireEvent.click(colorButton)
  expect(colorButton).toHaveAccessibleName('Change to red')
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})
});