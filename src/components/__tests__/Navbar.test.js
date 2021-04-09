import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Navbar from '../Navbar';

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('renders correctly navbar', () => {
  const store = mockStore({});
  const wrapper = shallow(<Navbar store={store} />);
  wrapper.debug();
  it('renders a jumbotron', () => {
    expect(wrapper.find('.navbar-brand').length).toBe(1);
  });
});
