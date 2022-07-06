import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem action>
          <Link to="/">lorem</Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default Menu;
