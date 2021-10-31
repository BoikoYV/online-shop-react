import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import Button from './Button';

describe('<Button /> component', () => {
    it('should render button with text', () => {
        const { getByText } = render(<Button text="Ok" />)
        getByText('Ok')
    })
    it('should calls "onClickHandler" prop on button click', () => {
        const onClickHandler = jest.fn();
        const { getByText } = render(<Button text="OK" onClickHandler={onClickHandler} />);

        fireEvent.click(getByText("OK"));
        expect(onClickHandler).toHaveBeenCalled();
    });
})