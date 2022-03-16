import './Header.css';
import React from 'react';

export default props => 
    // d-none: Para celulares o header nao aparece
    // flex-column: orientação do flex
    // fa: font-awesome
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>
