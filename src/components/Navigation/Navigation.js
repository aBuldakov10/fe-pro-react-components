import React from 'react';
import PropTypes, {objectOf} from 'prop-types';

const Navigation = ({navList}) => {
  return (
    <nav>
      <ul className="nav-list">
        {
          Object.entries(navList).map(([title, href]) => {
            return (
              <li className="nav-list__item" key={href}>
                <a href={href}>{title}</a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  navList: objectOf(PropTypes.string.isRequired),
}

export default Navigation;
