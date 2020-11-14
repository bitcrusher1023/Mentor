import React from 'react';
import { render, screen } from '@testing-library/react';
import BackToHomeBtn from './BackToHomeBtn';

describe('BackToHomeBtn component', () => {
    test('render BackToHomeBtn snapshot', () => {
        const { asFragment } = render(<BackToHomeBtn />);
        expect(asFragment(<BackToHomeBtn />)).toMatchSnapshot();
    });

    it('Render BackToHomeBtn correctly', () => {
        render(<BackToHomeBtn />);
        screen.debug();
        expect(screen.getByText(/Go back to home/)).toBeInTheDocument();
    });
});
