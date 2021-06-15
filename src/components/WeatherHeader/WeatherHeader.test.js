import React from 'react';
import WeatherHeader from './WeatherHeader';
import { render, screen, cleanup } from '@testing-library/react';
import { mount, configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { useAppContext, WeatherProvider } from '../../context/CreateContext'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const wrapper = mount(<WeatherProvider><WeatherHeader /> </WeatherProvider>);
describe('weatherHeader Component', () => {
    test("expect to render WeatherHeader component", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('renders without error', () => {
        const WeatherHeaderComponent = wrapper.find(".weatherHeader");
        expect(WeatherHeaderComponent.length).toBe(1);;
    });
    
})
