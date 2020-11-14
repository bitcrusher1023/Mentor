import React from 'react';
import { render } from '@testing-library/react';
import CloseButton from './CloseButton';

describe('CloseButton component', () => {
    test('Render CloseButton snapshot', () => {
        const { asFragment } = render(<CloseButton />);
        expect(asFragment(<CloseButton />)).toMatchSnapshot();
    });
});
