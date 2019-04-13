import React, { Component } from 'react';
import './TodoInput.css'



function submit(props, e) {
    if (e.key === 'Enter') {
        props.onSubmit(e)
    }
}

function changeTitle(props, e) {
    props.onChange(e)
}

export default function (props) {
    return <input type="text" value={props.content}
        className="TodoInput"
        onChange={changeTitle.bind(null, props)}
        onKeyPress={submit.bind(null, props)}
    />
}


// onChange={changeTitle.bind(null, props)}

// 上面的代码相当于
// let temp = function(e){
// changeTitle.call(null, props, e)
// }

// onChange={temp}