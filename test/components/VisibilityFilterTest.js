import React from 'react';
import { shallow } from 'enzyme';
import VisibilityFilter from 'components/VisibilityFilter.js';

describe('<VisibilityFilter />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<VisibilityFilter />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "visibilityfilter-component"', function () {
      expect(component.hasClass('visibilityfilter-component')).to.equal(true);
    });
  });
});
