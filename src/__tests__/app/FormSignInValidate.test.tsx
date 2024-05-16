import FormSignIn from "@/app/formSignIn"
import { fireEvent, render, screen } from "@testing-library/react"

describe('Sign In page form validation', () => {
    it('should display required error when value is invalid', async () => {
        render(<FormSignIn />)

        const ButtonSignin = screen.getByRole('button', { name: /Sign In/i })

        fireEvent.submit(ButtonSignin);

        const EmailMsgValidate = screen.findByText(/email is required/i)
        const PasswordMsgValidate = screen.findByText(/password is required/i)

        expect(await EmailMsgValidate).toBeInTheDocument()
        expect(await PasswordMsgValidate).toBeInTheDocument()
    })
})