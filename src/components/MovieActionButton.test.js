import React from 'react';
import { render } from '@testing-library/react';
import MovieActionButton from './MovieActionButton';

describe('MovieActionButton component', () => {
    it('Render MovieActionButton snapshot', () => {
        const { asFragment } = render(<MovieActionButton />);
        expect(asFragment(<MovieActionButton />)).toMatchSnapshot();
    });
});