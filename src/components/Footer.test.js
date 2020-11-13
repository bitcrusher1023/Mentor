import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
    it('Render Footer snapshot', () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment(<Footer />)).toMatchSnapshot();
    });
});