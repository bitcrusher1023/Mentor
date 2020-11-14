import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo component', () => {
    it('Render Logo snapshot', () => {
        const { asFragment } = render(<Logo />);
        expect(asFragment(<Logo />)).toMatchSnapshot();
    });

    it('Render Logo correctly', () => {
        render(<Logo />);
        // screen.debug();
        expect(screen.getByText('Netflix')).toBeInTheDocument();
    });
});
