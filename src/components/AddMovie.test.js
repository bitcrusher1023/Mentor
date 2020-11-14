import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddMovie from './AddMovie';

describe('AddMovie component', () => {
    it('Render AddMovie snapshot', () => {
        const { asFragment } = render(<AddMovie />);
        expect(asFragment(<AddMovie />)).toMatchSnapshot();
    });

    it('Render AddMovie correctly', () => {
        render(<AddMovie />);
        screen.debug();
        expect(screen.getByText('+ Add Movie')).toBeInTheDocument();
    });

    it('calls the onClick callback handler', () => {
        const handleShow = jest.fn();

        render(<AddMovie handleShow={handleShow}/>);

        const AddMovieBtn = screen.getByRole('button');
        fireEvent.click(AddMovieBtn);
        expect(handleShow).toHaveBeenCalledTimes(1);
    });
});
