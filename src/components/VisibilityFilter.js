import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './visibilityfilter.cssmodule.css';

class VisibilityFilter extends React.Component {

  render() {
    return (
      <div className="visibilityfilter-component" styleName="visibilityfilter-component">
		<a href="" onClick={e => {
			e.preventDefault();
			this.props.filter("all");
		}}>All</a>
		,
		<a href="" onClick={e => {
			e.preventDefault();
			this.props.filter("active");
		}}>Active</a>
		,
		<a href="" onClick={e => {
			e.preventDefault();
			this.props.filter("completed");
		}}>Completed</a>
      </div>
    );
  }
}

VisibilityFilter.displayName = 'VisibilityFilter';
VisibilityFilter.propTypes = {};
VisibilityFilter.defaultProps = {};

export default cssmodules(VisibilityFilter, styles);
