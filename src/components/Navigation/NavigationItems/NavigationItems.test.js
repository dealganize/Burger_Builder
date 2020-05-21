import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<Navigation Items />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it('should  render two <NavigationItem /> elements if not authenticated', () => {
    //create instance of component for test
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('should  render three <NavigationItem /> elements if authenticated', () => {
    //create instance of component for test
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
});
