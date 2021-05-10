import { render, screen } from '@testing-library/react';
import App from '../components/App';

import {configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe("Chuck Norris Application Page", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  test('renders title name', () => {
    expect(wrapper.find("h1").text()).toContain("Chuck Norris")
  });

  test('renders a button with a text of `Get new joke`', () => {
    expect(wrapper.find("button").text()).toBe("Get new joke")
  });

  test('render the initial value of the state in joke paragraph', () => {
    expect(wrapper.find("p").text()).toBe('');
  })

  // test('render the click event of the "get new joke" button and display joke', (
  //   {Function: getJoke}
  // ) => {
  //   wrapper.find("button").simulate('click');
  //   expect(wrapper.find("p")).toHaveBeenCalledWith();
  // })
  
});

