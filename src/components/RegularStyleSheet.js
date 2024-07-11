import React from "react";
import './myStyles.css'

export default function RegularStyleSheet({ className }) {
    const computedClassName = className ? 'class1' : 'class2';
    return (
        <div>
            <h1 className={computedClassName}>Learning how to style a react component.</h1>
        </div>
    );
}
