import React, { useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Button,
} from "reactstrap";
import TreatmentResults from "../../components/AI/ccCard"; // Import the TreatmentResults component
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/DarkFooter";
import Guide from '../../components/AI/ccGuide';
import FrequentlyAskedQuestions from "components/AI/ccFAQ";
function CostComparison() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    medicalCondition: '',
    budget: '',
    location: ''
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Create a reference for the results section
  const resultsRef = useRef(null);

  // Sample treatment data (could be fetched from an API)
  const treatments = [
    { name: "Treatment A", location: "New York", cost: 5000, successRate: 90 },
    { name: "Treatment B", location: "Los Angeles", cost: 7000, successRate: 85 },
    { name: "Treatment C", location: "Chicago", cost: 4500, successRate: 88 },
      { name: "Treatment D", location: "Houston", cost: 6000, successRate: 92 },
    { name: "Treatment E", location: "Los Angeles", cost: 7000, successRate: 85 },
    { name: "Treatment F", location: "Chicago", cost: 4500, successRate: 88 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setShowResults(true); // Show treatment cards after form submission

    // Use setTimeout to ensure the DOM is updated before scrolling
    setTimeout(() => {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
    React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("images/travel3.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="black">
              <Form className="form" onSubmit={handleSubmit}>
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Cost Comparison
                  </CardTitle>
                </CardHeader>
                <CardBody>

                  <InputGroup className="no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="First Name..."
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </InputGroup>

                  <InputGroup className="no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Last Name..."
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </InputGroup>

                  <InputGroup className="no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons tech_watch-time"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Age..."
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                    />
                  </InputGroup>

                  <InputGroup className="no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons health_ambulance"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Medical Condition..."
                      type="text"
                      name="medicalCondition"
                      value={formData.medicalCondition}
                      onChange={handleInputChange}
                    />
                  </InputGroup>

                  <InputGroup className="no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons business_money-coins"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Budget..."
                      type="number"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                    />
                  </InputGroup>

                  <InputGroup className="no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons location_pin"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Location..."
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </InputGroup>

                </CardBody>

                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    size="lg"
                    type="submit"
                  >
                    Submit
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
        </Container>
      </div>

      {/* New Section with Black Background for Treatment Results */}
      {showResults && (
        <div
          className="section"
          ref={resultsRef} // Attach the reference here
          style={{
            backgroundColor: '	#28282B',
            padding: '50px 0',
            color: 'black', // Changed to black for better readability
          }}
        >
          <Container>
            <Row>
              <TreatmentResults treatments={treatments} />
            </Row>
          </Container>
        </div>
          )}
          <Guide />
          <FrequentlyAskedQuestions/>
      <Footer />
    </>
  );
}

export default CostComparison;
