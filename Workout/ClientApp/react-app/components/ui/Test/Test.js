import React from 'react';

const test = ({ list, onButtonClick }) => (
    <div>
        <div>
            <span>Hello world! </span>
        </div>
        <div>
            <ul>
                {
                    list.map((elem, elemIdx) =>
                        <li key={elemIdx}>{elem}</li>
                    )
                }
            </ul>
        </div>
        <div>
            <button onClick={onButtonClick}>Click me!</button>
        </div>
    </div>
);

export default test;