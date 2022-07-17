import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({logoTitle}) => {
  return (
    <a href="" className="logo">{logoTitle}</a>
  )
}

Logo.propTypes = {
  logoTitle: PropTypes.string.isRequired,
}

export default Logo;
