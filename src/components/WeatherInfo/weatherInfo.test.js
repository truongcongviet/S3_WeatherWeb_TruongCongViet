import React from 'react';
import WeatherInfo from './WeatherInfo';
import { render } from '@testing-library/react';
import { WeatherProvider } from '../../context/CreateContext';

const wrapper = render(<WeatherProvider><WeatherInfo /></WeatherProvider>);
describe('WeatherInfo Component test', () => {
    test("expect to render WeatherInfo component", () => {
        const role = wrapper.getByRole('weather-test');
        expect(role).toHaveClass('weatherInfo');
        expect(wrapper).toMatchSnapshot();
    })
})