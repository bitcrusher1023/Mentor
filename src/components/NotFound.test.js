import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound component', () => {
    it('Render NotFound snapshot', () => {
        const { asFragment } = render(<NotFound />);
        expect(asFragment(<NotFound />)).toMatchSnapshot();
    });

    it('Render NotFound correctly', () => {
        render(<NotFound />);
        // screen.debug();
        expect(screen.getByText('No Movie Found')).toBeInTheDocument();
    });
});