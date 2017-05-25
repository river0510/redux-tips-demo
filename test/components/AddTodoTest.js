import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from 'components/AddTodo.js';

describe('<AddTodo />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<AddTodo />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "addtodo-component"', function () {
      expect(component.hasClass('addtodo-component')).to.equal(true);
    });
  });
});
