import React, { useState } from "react";
import { HashRouter as Router, useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Row,
  Col,
} from "reactstrap";
import '../../App.css';

function IndexHeader() {

  let pageHeader = React.createRef();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    country: "",
    medicalCondition: "",
    travelDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    navigate("/results");
  };

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  }, [pageHeader]);

  return (
    <>
      
      <div className="page-header clear-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/antoine-barres.jpg") + ")",
            opacity: 1.8,
            filter: "brightness(0.3)",
          }}
          ref={pageHeader}
        ></div>
        <Container
          className="form-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            color: "white",
          }}
        >
          <h1 className="healmeow" style={{ color: "white" }}>HealMeow</h1>
          <h3>Discover Your Perfect Medical Journey with Our Expert AI Assistant</h3>
          <Button style={{ backgroundColor: 'black' }} type="submit">
            Signup to book your plan now
          </Button>
          <br /><br /><br />
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="firstName">Name</Label>
                  <Input
                    tyle={{ color: 'white' }} 
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="custom-input"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="custom-input"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="country">Country</Label>
                  <Input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Enter your country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="custom-input"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="medicalCondition">Medical Condition</Label>
                  <Input
                    type="text"
                    name="medicalCondition"
                    id="medicalCondition"
                    placeholder="Enter medical condition"
                    value={formData.medicalCondition}
                    onChange={handleInputChange}
                    className="custom-input"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="travelDate">Travel Date</Label>
                  <Input
                    type="date"
                    name="travelDate"
                    id="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    className="custom-input"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button style={{ backgroundColor: 'black' }} type="submit" color='primary'>
              Submit to get started
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
