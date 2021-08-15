import PropTypes from 'prop-types';
import React from 'react';

const Header = ({message}) => {
    return (
        <h2 className = "Header text-center">
            {message}
        </h2>
    );
};

Header.propType = {
    message: PropTypes.string
};

Header.defaultProps = {
    message: "Hello!"
};

export default Header;
