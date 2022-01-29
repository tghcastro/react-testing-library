import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Initial application Color Button state', () => {
  render(<App />)
  
  const colorButton = screen.getByRole('button',{name: 'Change to blue'})
  expect(colorButton).toBeEnabled()
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
  expect(colorButton).toHaveAccessibleName('Change to blue')
});

test('Initial application checkbox state', () => {
  render(<App />)
  
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
});

test('When Color Button is clicked, button state is', () => {
  render(<App />)
  
  const colorButton = screen.getByRole('button')
  fireEvent.click(colorButton)
  expect(colorButton).toHaveAccessibleName('Change to red')
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})
});

test('When checkbox is checked then it disables the Color Button', () => {
  render(<App />)
  
  const colorButton = screen.getByRole('button',{name: 'Change to blue'})
  const checkbox = screen.getByRole('checkbox')

  expect(colorButton).toBeEnabled()
  expect(checkbox).not.toBeChecked()

  fireEvent.click(checkbox)

  expect(colorButton).toBeDisabled()

});