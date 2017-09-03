import React from 'react';

export default function ProductRow(props) {
  return (
    <tr className={props.stocked ? null : 'notStocked'}>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}
