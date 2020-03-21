import React from 'react';
import { shallow } from 'enzyme';
import RestaurantInfo from './RestuarantInfo.jsx';
import Details from './Details.jsx'

describe('Detail Components should render correctly', () => {
  test('ComponentDidMount', () => {
    const spy = jest.spyOn(Details.prototype, 'updateDetailState');
    const spys = jest.spyOn(Details.prototype, 'convertPercentage');
    const wrapper = mount(<Details Reviews={ { AverageRating : 3, amount: 3 }} />);
    wrapper.instance().updateDetailState();
    wrapper.instance().convertPercentage();
    expect(spy).toHaveBeenCalled();
    expect(spys).toHaveBeenCalled();
    expect(wrapper.instance().state.ShowDetails).toBe(false);
  })

});

describe('Details', () => {
//   test('it should invoke the update review method when a change event is emitted', () => {
//     const mockChangeHandler = jest.fn();
//     const wrapper = mount(<Details Reviews={ { AverageRating : 3, amount: 3 } updateDetailsStatus = () =>{}} />);
//     wrapper.instance().updateDetailsStatus = mockChangeHandler;
//     wrapper.instance().forceUpdate();
//     wrapper.find('#target').simulate('click');
//     expect(mockChangeHandler).toHaveBeenCalled();
//   });

//   test('it should correctly update the state of review form when a change event is emitted', () => {
//     const wrapper = mount(<RestaurantInfo />);
//     expect(wrapper.instance().state.ShowDetails).toBe(false);
//     wrapper.find('.x-button').simulate('click');
//     expect(wrapper.instance().state.ShowDetails).toBe(true);
//     wrapper.find('.x-button').simulate('click');
//     expect(wrapper.instance().state.ShowDetails).toBe(false);
//   });
})