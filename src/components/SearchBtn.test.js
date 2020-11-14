import React from 'react';
import { render } from '@testing-library/react';
import SearchBtn from './SearchBtn';

describe('SearchBtn component', () => {
    it('Render SearchBtn snapshot', () => {
        const { asFragment } = render(<SearchBtn />);
        expect(asFragment(<SearchBtn />)).toMatchSnapshot();
    });
});
