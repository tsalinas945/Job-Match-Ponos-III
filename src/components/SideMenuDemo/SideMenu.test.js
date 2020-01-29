import React from 'react';
import { shallow } from 'enzyme';
import SideMenu from './SideMenu';

describe('<SideMenu />', () => {
  test('renders', () => {
    const wrapper = shallow(<SideMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
