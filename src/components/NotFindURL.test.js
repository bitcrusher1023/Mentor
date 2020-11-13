import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import NotFindURL from './NotFindURL';

describe('NotFindURL component', () => {
    it('Render NotFindURL snapshot', () => {
        const component = shallow(
            <MemoryRouter>
                <NotFindURL />
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    });

    it('should includes link to home path', () => {
        const component = shallow(
            <MemoryRouter>
                <NotFindURL>
                    <Link to="/" />
                </NotFindURL>
            </MemoryRouter>
        );

        // screen.debug();
        expect(component.find(Link).props().to).toBe('/');
    });
});