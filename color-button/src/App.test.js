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
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})

  expect(colorButton).toBeEnabled()
  expect(checkbox).not.toBeChecked()

  fireEvent.click(checkbox)

  expect(colorButton).toBeDisabled()
});

test('When Color Button is disabled its color should be Gray', () => {
  render(<App />)
  
  const colorButton = screen.getByRole('button',{name: 'Change to blue'})
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})

  expect(colorButton).toBeEnabled()
  expect(checkbox).not.toBeChecked()

  fireEvent.click(checkbox)

  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'})
});

test("Give Color Button is red When reenabling it Then is should return to blue", () => {
  render(<App />)
  
  const colorButton = screen.getByRole('button',{name: 'Change to blue'})
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})

  expect(colorButton).toBeEnabled()
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
  expect(checkbox).not.toBeChecked()
  
  fireEvent.click(checkbox)

  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'})

  fireEvent.click(checkbox)

  expect(colorButton).toBeEnabled()
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
});

test("Give Color Button is blue When reenabling it Then is should return to blue", () => {
  render(<App />)
  
  const colorButton = screen.getByRole('button',{name: 'Change to blue'})
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})

  fireEvent.click(colorButton)

  expect(colorButton).toBeEnabled()
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})
  expect(checkbox).not.toBeChecked()
  
  fireEvent.click(checkbox)

  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'})

  fireEvent.click(checkbox)

  expect(colorButton).toBeEnabled()
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})
});