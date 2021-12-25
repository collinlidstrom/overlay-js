import React from 'react';
import { useState } from 'react';

const e = React.createElement;

export default function Component() {

    const [value, setValue] = useState(false);

    return (
        <button onClick={setValue(true)}>Click Me</button>
    )

}

const domContainer = document.querySelector('#component_container');
ReactDOM.render(e(Component), domContainer);