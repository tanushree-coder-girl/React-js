import React from 'react';
function AboutJsx() {
    return (
        <React.Fragment>
            <h1 className="heading">Hello jsx</h1>
            <h2>Welcome</h2>
            <p>{5 + 5}</p>
            <label htmlFor="Name"></label>
            <input type="text" id="name" placeholder="name" />
        </React.Fragment>
    )
}
export default AboutJsx;
