import React from 'react';
import WeatherChart from './WeatherChart';
import {render, screen, cleanup} from '@testing-library/react';
import { mount, configure  } from 'enzyme';
import toJson from 'enzyme-to-json';
import { WeatherProvider } from '../../context/CreateContext'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const wrapper = mount(<WeatherProvider> <WeatherChart /> </WeatherProvider>);
describe('ChartWeather Component', () => {
    test("expect to render ChartWeather component", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('renders without error', () => {
        const chartWeatherComponent = wrapper.find(".weatherChart");
        expect(chartWeatherComponent.length).toBe(1);;
    });
})