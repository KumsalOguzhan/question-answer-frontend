import React, { useEffect, useState } from "react";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import axiosInstance from "../services/api";

const Users = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/users");
        setUsers(response.data);
      } catch (err) {
        if (err) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log("Error: " + err.message);
        }
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <Row>
        <h1>Kullanıcılar</h1>
      </Row>
      <Row>
        {users?.data.slice(0).reverse().map((user) => {
          return (
            <Card className="my-2 w-75 mx-auto">
              <CardBody>
                <CardTitle tag="h5">{user.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {user.email}
                </CardSubtitle>
                <CardText>
                  {user.title ? <div>{"Ünvan: " + user.title}</div> : null}
                  {user.place ? <div>{"Yer: " + user.place}</div> : null}
                  {user.website ? <div>{"Website: " + user.website}</div> : null}
                </CardText>
              </CardBody>
            </Card>
          );
        })}
      </Row>
    </div>
  );
};

export default Users;
