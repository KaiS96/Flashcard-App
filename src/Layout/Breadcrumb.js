import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ link, linkName, name }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {!linkName ? (
         <li className="breadcrumb-item active" aria-current="page">
         {name}
       </li>
        ) : (
         
          <li className="breadcrumb-item">
          <Link to={link}>{linkName}</Link>
        </li>
        )}

        {linkName ? (
          <li className="breadcrumb-item active" aria-current="page">
            {name}
          </li>
        ) : null}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
