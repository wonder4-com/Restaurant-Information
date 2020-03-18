import React from 'react';
import { shallow } from 'enzyme';
import ReactTestUtils from'react-dom/test-utils'
import RestaurantInfo from './RestuarantInfo.jsx';
import Details from './Details.jsx';

var restauranInfo = {Restaurant: {claimed: "Unclaimed", name: "Bashirian, Zboncak and Batz", price: "$$$", category: "buffet"},
Review: {AverageRating: 4, amount: 1}}

describe('Components should render correctly', () => {
  test('should render the app component on the screen', () => {
    const wrapper = shallow(<RestaurantInfo info={restauranInfo}/>);
    expect(wrapper).toExist();
  });
});


const mockEventGenerator = (str) => {
    return {
      target: {
        name: 'todo',
        value: str,
      },
      preventDefault: () => {},
    };
};

describe('Restaurant', () => {
  test('it should invoke the updatedetails method when a change event is emitted', () => {
    const mockChangeHandler = jest.fn();
    const wrapper = shallow(<RestaurantInfo info={restauranInfo}/>);
    wrapper.instance().updateDetailsClickStatus = mockChangeHandler;
    wrapper.instance().forceUpdate();
    wrapper.find('button').at(0).simulate('click');
    expect(mockChangeHandler).toHaveBeenCalled();
  });
  test('it should correctly update the state of detail form when a change event is emitted', () => {
    const wrapper = shallow(<RestaurantInfo info={restauranInfo}/>);
    expect(wrapper.instance().state.ShowDetails).toBe(false);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.instance().state.ShowDetails).toBe(true);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.instance().state.ShowDetails).toBe(false);
  });

  test('it should invoke the update review method when a change event is emitted', () => {
    const mockChangeHandler = jest.fn();
    const wrapper = shallow(<RestaurantInfo info={restauranInfo}/>);
    wrapper.instance().updateWriteReviewClickStatus = mockChangeHandler;
    wrapper.instance().forceUpdate();
    wrapper.find('button').at(1).simulate('click');
    expect(mockChangeHandler).toHaveBeenCalled();
  });
  test('it should correctly update the state of review form when a change event is emitted', () => {
    const wrapper = shallow(<RestaurantInfo info={restauranInfo}/>);
    expect(wrapper.instance().state.ShowReviewForm).toBe(false);
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.instance().state.ShowReviewForm).toBe(true);
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.instance().state.ShowReviewForm).toBe(false);
  });

  test('it should invoke the update photo method when a change event is emitted', () => {
    const mockChangeHandler = jest.fn();
    const wrapper = shallow(<RestaurantInfo info={restauranInfo}/>);
    wrapper.instance().updateAddPhotoClickStatus = mockChangeHandler;
    wrapper.instance().forceUpdate();
    wrapper.find('button').at(2).simulate('click');
    expect(mockChangeHandler).toHaveBeenCalled();
  });
  test('it should correctly update the state of review form when a change event is emitted', () => {
    const wrapper = shallow(<RestaurantInfo info={restauranInfo}/>);
    expect(wrapper.instance().state.ShowPhotoForm).toBe(false);
    wrapper.find('button').at(2).simulate('click');
    expect(wrapper.instance().state.ShowPhotoForm).toBe(true);
    wrapper.find('button').at(2).simulate('click');
    expect(wrapper.instance().state.ShowPhotoForm).toBe(false);
  });

  const testData = [
    {
      id: 75,
      category: "Chinese",
      restaurantname: "Goyette, Murray and Stamm",
      claimed: "true",
      prize: "$",
      restaurant_id: 88,
      rating: 4,
      date: "2020-01-28T08:00:00.000Z"
    },
    {
      id: 126,
      category: "Chinese",
      restaurantname: "Goyette, Murray and Stamm",
      claimed: "true",
      prize: "$",
      restaurant_id: 88,
      rating: 1,
      date: "2019-11-05T08:00:00.000Z"
    },
    {
      id: 132,
      category: "Chinese",
      restaurantname: "Goyette, Murray and Stamm",
      claimed: "true",
      prize: "$",
      restaurant_id: 88,
      rating: 0,
      date: "2019-06-09T07:00:00.000Z"
    }]

  test('fetches forks from a local source', () => {
    const rendered = ReactTestUtils.renderIntoDocument(
        <RestaurantInfo />
    );

    rendered.setState({ Restaurant: { name: testData[0].restaurantname, price: testData[0].prize, rating: testData[0].rating } });

    expect(rendered.state.Restaurant.name).toEqual('Goyette, Murray and Stamm');
    expect(rendered.state.Restaurant.price).toEqual('$');
    expect(rendered.state.Restaurant.rating).toEqual(4);
  });

  test('ComponentDidMount', () => {
    const spy = jest.spyOn(RestaurantInfo.prototype, 'updateState');
    const wrapper = mount(<RestaurantInfo />);
    wrapper.instance().updateState(testData);
    expect(spy).toHaveBeenCalled();
  })
})