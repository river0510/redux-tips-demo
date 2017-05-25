import React from 'react';
import { shallow } from 'enzyme';
import TodoList from 'components/TodoList.js';

describe('<TodoList />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<TodoList />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "todolist-component"', function () {
      expect(component.hasClass('todolist-component')).to.equal(true);
    });
  });
});
