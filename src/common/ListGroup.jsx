import React from "react";
import _ from "lodash";

const ListGroup = ({ items, textProperty, valueProperty, onItemSelect }) => {
  return (
    <ul className="list-group">
      {_.map(items, (item) => (
        <li className="list-group-item" key={item[valueProperty]}>
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
