import React from 'react';
import { shallow } from 'enzyme';
import RestaurantInfo from './RestuarantInfo.jsx';
import Details from './Details.jsx'

describe('Components should render correctly', () => {
    test('RestaurantInfo should render', () => {
        const component = shallow(<RestaurantInfo />);

        expect(component).toMatchSnapshot();
    });
    test('Deails should render', () => {
        const component = shallow(<Details />);

        expect(component).toMatchSnapshot();
    });
    
});

// decribe('button component should respond', () => {
//     test('when details button is click, click event should be triggered', () =>{
//         const mockButtonClick = jest.fn();

//         const button= shallow()
//     })
// })



// describe('Test Button component', () => {
//     it('Test click event', () => {
//       const mockCallBack = jest.fn();
  
//       const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
//       button.find('button').simulate('click');
//       expect(mockCallBack.mock.calls.length).toEqual(1);
//     });
//   });