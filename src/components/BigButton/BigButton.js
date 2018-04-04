import React from 'react';

function BigButton({ action, actionText, subline }) {
  return (
    <div className="BigButton">
      <a href="#simulate" className={action}>
        <div className="action">{actionText}</div>
        <div className="subline">{subline}</div>
      </a>
    </div>
  );
}

export default BigButton;
