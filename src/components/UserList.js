import React from 'react';
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const UserList = () => {

  return (
    <ListGroup className="mt-4">
            <ListGroupItem className="d-flex" >
              <strong>Lucas</strong>
              <div className="ml-auto">
                <Link to= "/edit/id" color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button color="danger">Delete</Button>
              </div>
            </ListGroupItem>
    </ListGroup>
  )
}