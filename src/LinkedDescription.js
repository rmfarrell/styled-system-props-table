import React from 'react'

const LinkedDescription = (props = {}) => {
    const { children, utility = '' } = props;
    const urlBase = 'https://styled-system.com/api/';
    return (
        <span>
            <a href={`${urlBase}#${utility}`} target="_blank">
                {children}
            </a>
        </span>
    );
};

export default LinkedDescription;