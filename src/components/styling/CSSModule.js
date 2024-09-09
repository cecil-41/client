import React from "react";
import './myStyles.css';
import cssstyles from './appStyles.module.css';

export default function CSSModule() {
  return (
    <div>
        <h1 className={cssstyles.header}>Hello, World!</h1>
        <p className={cssstyles.content}>This is a paragraph with scoped styles.</p>
        <h1 className="error">Style From myStyles.css</h1>
    </div>
  )
}
