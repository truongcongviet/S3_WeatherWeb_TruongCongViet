import  {CustomizeActiveIcon, CustomizedMarker} from './customizedChart';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {formatTime} from './functional';


configure({ adapter: new Adapter() });

//test Icon weatherChart
describe("custom Icon in WeatherChart", () => {
    test('renders SunIcon', () => {
        const wrapper = mount(<CustomizeActiveIcon payload={{hours:15}} />);
        const idSun = wrapper.find("[data-testid='sun']");
        expect(idSun.length).toBe(1);

    });
    test('renders SunIcon', () => {
        const wrapper = mount(<CustomizeActiveIcon payload={{hours:1}} />);
        const idMoon = wrapper.find("[data-testid='moon']");
        expect(idMoon.length).toBe(1);
    });
})

//test markers weatherChart
describe("custom markers in WeatherChart", () => {
    test('renders marker', () => {
        const wrapper = mount(<CustomizedMarker payload={[]} active={false} />);
        const marker = wrapper.find(".customizedMarker");
        expect(marker.length).toBe(0);
    });
    test('renders marker', () => {
        const wrapper = mount(<CustomizedMarker payload={[]} active={true} />);
        const marker = wrapper.find(".customizedMarker");
        expect(marker.length).toBe(0);
    });
    test('renders marker', () => {
        const wrapper = mount(<CustomizedMarker payload={[{payload:{hour: "09:00 PM", temp:28.36, tide:2}}]} active={true} />);
        const marker = wrapper.find(".customizedMarker");
        expect(marker.length).toBe(1);
    });
})

//test function formatTime
describe ("custom hours functional", () => {
    test ('render hourformat', ()=> {
        const formathours = formatTime(new Date(1618315200));
        expect(formathours).toMatch('00:31 AM');
    })
})