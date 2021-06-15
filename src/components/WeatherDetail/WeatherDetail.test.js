import React from 'react';
import WeatherDetail from './WeatherDetail';
import { mount, configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { WeatherProvider } from '../../context/CreateContext'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const wrapper = mount(<WeatherProvider><WeatherDetail /> </WeatherProvider>);
describe('WeatherHeader Component', () => {
    test("expect to render WeatherHeader component", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('renders without error', () => {
        const weatherDetailComponent = wrapper.find(".detail-weather");
        expect(weatherDetailComponent.length).toBe(1);;
    });
    
})
