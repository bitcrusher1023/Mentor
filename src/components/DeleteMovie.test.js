/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeleteMovie from './DeleteMovie';

describe('DeleteMovie component', () => {
    it('Render DeleteMovie snapshot', () => {
        const { asFragment } = render(<DeleteMovie />);
        expect(asFragment(<DeleteMovie />)).toMatchSnapshot();
    });

    it('Render DeleteMovie correctly', () => {
        render(<DeleteMovie />);
        // screen.debug();
        expect(screen.getByText('Confirm')).toBeInTheDocument();
    });

    it('calls the onClick callback handler', () => {
        const handleShowDeleteMock = jest.fn();
        const onDeleteMock = jest.fn();

        render(
            <DeleteMovie handleShowDelete={handleShowDeleteMock} onDelete={onDeleteMock}>
                <div onClick={handleShowDeleteMock}/>
                <button onClick={onDeleteMock}/>
            </DeleteMovie>
        );

        const confirmButton = screen.getByRole('button', {name: 'Confirm'});
        fireEvent.click(confirmButton);
        expect(onDeleteMock).toHaveBeenCalledTimes(1);
    });
});
