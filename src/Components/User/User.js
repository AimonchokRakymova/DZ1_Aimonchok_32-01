import React from 'react';

const User = (props) => {
    return (
        <div>
            <span>{props.name} {props.age}</span>
        </div>
    );
};

export default User;