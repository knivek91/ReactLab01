import React from 'react';

export const TR = ({ cssClass, index, text, onDelete }) => (
    <tr className={cssClass}>
        <td>{text}</td>
        <td>
            <button type="button" onClick={(e) => { onDelete({ e, index, text }) }} className="btn btn-danger">-</button>
        </td>
    </tr>
);