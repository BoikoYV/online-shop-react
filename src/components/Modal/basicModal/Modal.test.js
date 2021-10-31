import { render,screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('<Modal /> Component', () => {

    it('should render modal and calls "closeModalHandler" prop on button click', () => {
        const closeModalHandler = jest.fn();
        const { getByText } = render(
            <Modal
                closeModalHandler={closeModalHandler}
                header="Modal header"
                text="Modal text">
            </Modal>,
        );
        getByText('Modal text');
        const closeButton = screen.getByRole('button')
        fireEvent.click(closeButton);
        expect(closeModalHandler).toHaveBeenCalled();
    })
  
})