import React, {Component} from 'react';

const BaseContainer = ({children}) => (
    <div className={'container-fluid'}>
        <div>{children}</div>
    </div>
);

export default BaseContainer;
