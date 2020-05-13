// import React, { Component } from "react";
// import {
//   Route,
//   Link,
//   BrowserRouter as Router,
//   Switch,
//   Redirect,
// } from "react-router-dom";

// class Main extends Component {
//   render() {
//     return (
//       <section className="main">
//         <div className="display-4 mt-5 text-center">
//           <span className="fa fa-fw fa-bolt text-danger"></span> <br />
//           This is Main component loaded
//         </div>
//         <div className="text-center">
//           Start by editing the main component or by adding your own.
//         </div>
//       </section>
//     );
//   }
// }

// export default Main;
import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Main = (props) => {
  return (
    <div className="container mt-5">
      <p className=" font-weight-bold text-lg-center text-center">
        {" "}
        You can Register Here
      </p>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter you name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter you Email Here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter you password Here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword"> Re-enter Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter you again password Here"
          />
        </FormGroup>
        {/* <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */}
        {/* <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input
            type="select"
            name="selectMulti"
            id="exampleSelectMulti"
            multiple
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */}
        <FormGroup>
          <Label for="exampleText">Address</Label>
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            placeholder="Enter your address Here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Upload Photo</Label>
          <Input type="file" name="file" id="exampleFile" />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legand> Gender</legand>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Female
            </Label>
          </FormGroup>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Main;
