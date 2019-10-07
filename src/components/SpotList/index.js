import React from 'react';
import './index.scss';

const List = props => (
  <>
    <ul className="list">
      {props.value.map(v => (
        <li key={v._id}>
          <header style={{ backgroundImage: `url(${v.thumbnail_url})` }} />
          <strong>{v.company}</strong>
          <span>{v.price ? `R$ ${v.price}/dia` : 'GRATUITO'}</span>
        </li>
      ))}
    </ul>
  </>
);

export default List;
