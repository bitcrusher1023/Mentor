import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SortingForm from './SortingForm';

describe('SortingForm component', () => {
    it('Render SortingForm snapshot', () => {
        const sortingOnChange = jest.fn();
        const { asFragment } = render(<SortingForm sortingOnChange={sortingOnChange}/>);
        expect(asFragment(<SortingForm />)).toMatchSnapshot();
    });

    it('calls the onChange callback handler', () => {
        const sortingOnChange = jest.fn();

        render(
            <SortingForm sortingOnChange={sortingOnChange}/>
        );

        const select = screen.getByRole('combobox');
        fireEvent.change(select);
        expect(sortingOnChange).toHaveBeenCalledTimes(1);
    });
});