import React from 'react';
import Option from './Option.js';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your options</h3>
            <p className="widget-header__title">{props.options.length} option(s)</p>
            <button 
                className="button button--link"
                onClick={props.onDeleteOptions}
            >
                Remove all
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
        {
            props.options.map((option, index) => (
                <Option 
                    key={Math.random()} 
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
);

export default Options;