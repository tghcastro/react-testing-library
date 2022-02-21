import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import SummaryForm from '../SummaryForm'
import userEvent from '@testing-library/user-event'

test('Initial state', ()=> {
    render(<SummaryForm />)
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i
    })
    expect(checkbox).not.toBeChecked()

    const confirmButton = screen.getByRole('button', {
        name: /confirm/i
    })
    expect(confirmButton).toBeDisabled()
})

test('Checkbox disables button on first click and enables on second click', () => {
    render(<SummaryForm />)
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i
    })
    const confirmButton = screen.getByRole('button', {
        name: /confirm/i
    })
    
    userEvent.click(checkbox)
    expect(confirmButton).toBeEnabled()

    userEvent.click(checkbox)
    expect(confirmButton).toBeDisabled()
})

test('Popover responds to hover', async () => {
    render(<SummaryForm />)

    const popOverMessage = /no ice cream will actually be delivered/i
    let popOverMessageElement = screen.queryByText(/no ice cream will actually be delivered/i)

    expect(popOverMessageElement).not.toBeInTheDocument()

    const termsAndConditions = screen.getByText(/terms and conditions/i)
    userEvent.hover(termsAndConditions)

    popOverMessageElement = screen.getByText(popOverMessage)
    expect(popOverMessageElement).toBeInTheDocument()
    
    userEvent.unhover(termsAndConditions)

    await waitForElementToBeRemoved(() => screen.queryByText(popOverMessage))
})
