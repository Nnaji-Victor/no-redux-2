import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../_helpers/test_utils';
import Form from '../Components/Form';
import {buildForm} from '../_helpers/build_form';


test(`It displays two input forms and a button`, () => {
    render(<Form />)
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
})

test(`shows error screen when at least one input form is empty`, () => {
    render(<Form />)
    const {username} = buildForm()
    userEvent.type(screen.getByLabelText(/username/i), username)
    userEvent.click(screen.getByRole('button'))
})

test(`it submits username and password on submit`, async () => {
    const {username, password} = buildForm();
    const handleSubmit = jest.fn();

    render(<Form onSubmit={handleSubmit}/>)
    userEvent.type(screen.getByLabelText(/username/i), username)
    userEvent.type(screen.getByLabelText(/password/i), password)
    userEvent.click(screen.getByRole('button'))
    expect(handleSubmit).toHaveBeenCalledWith({
        username, password
    });

})
